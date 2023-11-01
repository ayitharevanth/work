
import express from "express";
import { User } from "../db";
import { SECRET } from "../authenticate";
import jwt from "jsonwebtoken"
import {z} from "zod"
import {parsedInput} from "../../common/src/index"

const router = express.Router();

// let input= z.object({
//   username:z.string(),
//   password: z.string()
  
// })

router.post("/",async(req,res)=>{
    const { username, password } = req.body;
    let parsed_input = parsedInput.safeParse(req.body)  

    if(!parsed_input.success){
        res.json({
          "msg":"wrong"
        })
      return
    }
    try {
      const existingUser = await User.findOne({ username });
  
      if (existingUser) {
        res.status(403).json({ message: 'User already exists' });
      } else {
        const obj = { username, password };
        const newItem = new User(obj);
        await newItem.save();
        
        const token = jwt.sign({ id:newItem._id }, SECRET, { expiresIn: '1h' });
        res.send({ msg: "User created successfully", token: token });
      }
    } catch (error) {
    
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });}
    
    })

export default router