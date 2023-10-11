import express from "express";

const router = express.Router();

const current_status = async () => {
  const apiKey = 'QW4I04HMH22TEVA1';
  const url = `https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=${apiKey}`;

  try {
    const _status = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'request', // This is the equivalent of the User-Agent header in the request library
      },
    });

    if (!_status.ok) {
      throw new Error(`HTTP error! Status: ${_status.status}`);
    }

    const data = await _status.json(); // Parse JSON response

    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

router.get("/", async (req, res) => {
  try {
    const ans = await current_status();
    res.json(ans);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
