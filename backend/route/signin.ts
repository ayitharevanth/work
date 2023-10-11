import express from "express";
import { User } from "../db";
import { SECRET } from "../authenticate";
import jwt from "jsonwebtoken"

const router = express.Router();

router.post("/",async(req,res)=>{
    const {username,password} = req.body

   let New_user = await User.findOne({username,password})

   if(New_user){
        const token = jwt.sign({ username, role: 'admin' },SECRET,{ expiresIn: '1h' })
        res.send({msg : "user logged in successfully",token:token})
   }else{
        res.send({msg:"something something is wrong with you "})
   }
})

export default router