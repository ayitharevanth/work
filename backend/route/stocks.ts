import express from "express";

const router = express.Router();

const funda_getter = async (symbol: string) => {
  const apiKey = 'QW4I04HMH22TEVA1'; // Replace with your actual API key

  const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`;
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'fetch',
      },
    });

    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Re-throw the error so you can handle it in your route handler
  }
};

router.post("/", async (req, res) => {
  const {stock} = req.body;

   

  try {
    const funda = await funda_getter(stock);
    console.log(funda);
    res.json(funda); // Send the fetched data as a JSON response to the client
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle errors and send an error response
  }
});

export default router;
