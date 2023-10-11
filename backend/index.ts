import express from 'express'
import mongoose, { model } from 'mongoose'
import cors from "cors"

import gainerLoser from "./route/gainerLoser"
import News from "./route/News"
import signin from "./route/signin"
import signup from "./route/signup"
import onoffMarket from "./route/onoffMarket"
import { authenticateJWT } from './authenticate'
import ticker from './route/tickersearch'
import sentiment from "./route/sentiment"


const app = express();
const port = 3000


app.use(express.json())
app.use(cors())




mongoose.connect("mongodb+srv://yashabhaybhende:yash@cluster0.6tepwax.mongodb.net/",)


app.use("/signin",signin)
app.use("/signup",signup)
app.use("/News",News)
app.use("/gainerLoser",gainerLoser)
app.use("/onoffMarket",onoffMarket)
app.use("/ticker",ticker)
app.use("/sentiment",sentiment)


app.get("/me",authenticateJWT,(req:any,res)=>{
    res.json({
        username:req.user
    })
    
})


app.listen(port,()=>{
    console.log(`listeneing on port ${port}`)
})

