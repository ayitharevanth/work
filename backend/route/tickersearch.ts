import express from "express";
import * as dotenv from "dotenv"
const router = express.Router();
dotenv.config()
const apiKey = process.env.API_KEY
async function ticker(value) {
    
    const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch Error:', error);
        throw error; // Rethrow the error to handle it in the router.post catch block
    }
}

router.post("/", async (req, res) => {
    const input_ticker = req.body.ticker;

    try {
        // const response = await ticker(input_ticker);
        const response = [
        {
            "1. symbol": "AAPL",
            "2. name": "",
            "3. type": "",
            "4. region": "",
            "5. marketOpen": "",
            "6. marketClose": "",
            "7. timezone": "",
            "8. currency": "",
            "9. matchScore": ""
        },
        {
            "1. symbol": "IBM",
            "2. name": "",
            "3. type": "",
            "4. region": "",
            "5. marketOpen": "",
            "6. marketClose": "",
            "7. timezone": "",
            "8. currency": "",
            "9. matchScore": ""
        },{
            "1. symbol": "reliance",
            "2. name": "",
            "3. type": "",
            "4. region": "",
            "5. marketOpen": "",
            "6. marketClose": "",
            "7. timezone": "",
            "8. currency": "",
            "9. matchScore": ""
        }
        ]
        res.json(response); // Send JSON response to the frontend
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});

export default router;
