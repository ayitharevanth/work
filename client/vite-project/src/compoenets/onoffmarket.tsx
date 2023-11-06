/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState,useEffect } from "react"
import axios from "axios"
import Typography from '@mui/material/Typography';

export function Onoffmarket(){
    const [market_status,setMarket] = useState([])

    async function status(){
        const response = await axios.get("http://localhost:3000/onoffMarket")
        setMarket(response.data.markets)
    }
    useEffect(()=>{
        status()
    },[])
    if(market_status.length >1 ){
        return<>
            
            {market_status.map((element)=>{
                return<>
                    {element.region}=
                    {element.current_status}
                    <br />
                    <br />
                </>
            })}
        </>
    }else{
        return<>
            <Typography variant="h2" gutterBottom>
                loading...
            </Typography>
        </>
    }
}