/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState,useEffect } from "react"
import axios from "axios"
import Typography from '@mui/material/Typography';
export function Gainer_loser(){
    const [Gainer,setGainer] = useState([])
    const [loser,setLoser] = useState([])

    async function status(){
        const response = await axios.get("http://localhost:3000/gainerLoser")
        setGainer(response.data.top_gainers)
        setLoser(response.data.top_losers)
    }
    useEffect(()=>{
        status()
    },[])
    return<>
        <h1>gainer</h1>
        {Gainer.map((element)=>{
            return <>
                <Typography variant="h5" gutterBottom>
                {element.ticker}:-
                </Typography>
                
                <Typography variant="subtitle2" gutterBottom>
                    price={element.price} <br />
                    CHG={element.change_amount} <br />
                    CGH%={element.change_percentage}<br />
                    total volume={element.volume}
                </Typography>
                <hr />
                <br />
                <br />
            </>
        })}
        <h1>loser</h1>
        {loser.map((element)=>{
            return <>
                {element.ticker}:
                {element.price}=
                {element.change_amount}=
                {element.change_percentage}=
                {element.volume}
                <br />
                <br />
                <br />
                <br />
            </>
        })}
    </>
}

