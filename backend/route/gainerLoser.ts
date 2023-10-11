import express from "express";

const router = express.Router();

const fetchTopGainersLosers = async () => {
  // Replace 'YOUR_API_KEY' with your actual Alpha Vantage API key
  const apiKey = 'YOUR_API_KEY';
  const url = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'request',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

router.get("/", async (req, res) => {
  try {
    const topGainersLosersData = await fetchTopGainersLosers();
    res.json(topGainersLosersData);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
