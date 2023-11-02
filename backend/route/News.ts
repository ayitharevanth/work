import express from "express";
import * as dotenv from "dotenv"
const router = express.Router();

dotenv.config()
const apiKey = process.env.API_KEY
const News_getter = async () => {
  
  const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};

router.get("/", async (req, res) => {
  try {
    const response = await News_getter();
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
