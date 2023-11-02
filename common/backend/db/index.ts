import mongoose, { model } from 'mongoose'




export const userSchema = new mongoose.Schema({
    username:String,
    password: String,
   
})

export const Stock_watchlist = new mongoose.Schema({
    stocks:[String],
    userID: String
})


export const User = mongoose.model("User",userSchema)
export const WatchList = mongoose.model("WatchList",Stock_watchlist)