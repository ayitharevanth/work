import express from "express";
import { User } from "../db";
import { SECRET } from "../authenticate";
import jwt from "jsonwebtoken"
import {z} from "zod"
import {parsedInput} from "../../common/src/index"
const router = express.Router();


// let input= z.object({
//      username:z.string(),
//      password: z.string()
     
// })


router.post("/",async(req,res)=>{
     let parsed_input= parsedInput.safeParse(req.body)
     
     if(!parsed_input.success){
          res.json({
               "msg":"wring"
          })
          return
     }

     const {username,password} = req.body

     let New_user = await User.findOne({username,password})

     if(New_user){
         
          const token = jwt.sign({ id:New_user._id },SECRET,{ expiresIn: '1h' })
          res.send({msg : "user logged in successfully",token:token})
     }else{
          res.send({msg:"something something is wrong with you "})
     }
})

export default router