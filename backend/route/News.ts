import express from "express";

const router = express.Router();

const News_getter = async () => {
  // Replace 'YOUR_API_KEY' with your actual Alpha Vantage API key
  const apiKey = 'QW4I04HMH22TEVA1';
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
