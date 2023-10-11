
import express from "express";
import { User } from "../db";
import { SECRET } from "../authenticate";
import jwt from "jsonwebtoken"

const router = express.Router();


router.post("/",async(req,res)=>{
    const { username, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ username });
  
      if (existingUser) {
        res.status(403).json({ message: 'User already exists' });
      } else {
        const obj = { username, password };
        const newItem = new User(obj);
        await newItem.save();
        const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
        res.send({ msg: "User created successfully", token: token });
      }
    } catch (error) {
      // Handle any database or other errors here
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
}})

export default router