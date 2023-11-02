/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios"
import { useEffect, useState  } from "react"
import {SpeedometerComponent} from "./sentimentMeter"
import { SentimentState } from "../store/atoms/sentiment"
import { useRecoilValue, useSetRecoilState } from "recoil"
export function Sentiment(){
    const [sentiment, setsentiment] = useState ("")
    
    const setsentiments = useSetRecoilState(SentimentState)
    const sentiment_value = useRecoilValue(SentimentState)
    const [markets_chg,setMarket] = useState([])

    async function sentiment_getter(){
        
        let response = await axios.get("http://localhost:3000/sentiment")
        setsentiment(response.data.sentiment)
        setsentiments(response.data.sentiment_value)
        
        setMarket([response.data.american_market,response.data.china_market,response.data.rusian_market,response.data.indian_market])
        

    }
    useEffect(()=>{
        setInterval(()=>{
            sentiment_getter()
        },2000)
        
    },[])
    
    return <>
        
        <SpeedometerComponent sentiment_value={sentiment_value}/>   
        <center>
        <div style={{margin: "50px",padding: "10px"}}>
            <h1>{sentiment}</h1>

            american markets:{markets_chg[0]}<br />
            china market:{markets_chg[1]}<br />
            russian market:{markets_chg[2]}<br />

            indian markets:{markets_chg[3]}<br />
        </div>
        </center>
    
    </>


}

