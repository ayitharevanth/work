import mongoose, { model } from 'mongoose'

export const userSchema = new mongoose.Schema({
    username:String,
    password: String
})

export const User = mongoose.model("User",userSchema)