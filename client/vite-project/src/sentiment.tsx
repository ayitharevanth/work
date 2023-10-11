/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios"
import { useEffect, useState  } from "react"
import {SpeedometerComponent} from "./sentimentMeter"
export function Sentiment(){
    const [sentiment, setsentiment] = useState ("")
    const [sentiment_value,setVal] = useState(null)
    
    const [markets_chg,setMarket] = useState([])

    async function sentiment_getter(){
        
        let response = await axios.get("http://localhost:3000/sentiment")
        setsentiment(response.data.sentiment)
        setVal(response.data.sentiment_value)
        
        setMarket([response.data.american_market,response.data.china_market,response.data.rusian_market,response.data.indian_market])
        

    }
    useEffect(()=>{
        setInterval(()=>{
            sentiment_getter()
        },2000)
        
    },[])
    
    return <>
        
        <SpeedometerComponent sentiment_value={sentiment_value}/>
        <h1>{sentiment}</h1>

        american:{markets_chg[0]}<br />
        china:{markets_chg[1]}<br />
        russian:{markets_chg[2]}<br />
        indian:{markets_chg[3]}<br />
        
    
    </>


}

