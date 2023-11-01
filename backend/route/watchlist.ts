import express from "express";
import { WatchList} from "../db";
const Router = express.Router()

Router.get("/get",async(req,res)=>{
    const userid = req.headers["userid"]

    const aatchList =  await WatchList.findOne({userID:userid})

    if(aatchList){
        res.json(aatchList)
    }else{
        res.send("no stocks in watchlist")
    }

    
})

Router.post("/post", async (req, res) => {
    const { _stock } = req.body;
    const userid = req.headers["userid"];

   
    const watchList = await WatchList.findOne({ userID: userid });

    if (watchList) {
        if(watchList.stocks.includes(_stock)){
          res.send("already present")
          return
        }
        watchList.stocks.push(_stock);
    
        // Save the updated watchlist to the database
        await watchList.save();
    
        res.send("Stock saved to watchlist successfully");
      } else {
        // If the user's watchlist doesn't exist, create a new one and save it.
        const newWatchList = new WatchList({
          userID: userid,
          stocks: [_stock],
        });
    
        await newWatchList.save();
    
        res.send("New watchlist created with the stock.");
      }

    
});

Router.delete("/delete",async (req,res)=>{
  const {stockname} = req.body
  const userid = req.headers["userid"]

  const aatchList =  await WatchList.findOne({userID:userid})

    if(aatchList){
      aatchList.stocks = aatchList.stocks.filter(stock => stock.toLowerCase() !== stockname.toLowerCase());

      // Save the updated WatchList document
      await aatchList.save();
      res.send("deleted successfully")
    }else{
      res.send("error something")
  }
})

export default Router


