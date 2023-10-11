/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState,useEffect } from "react"
import axios from "axios"

export function Onoffmarket(){
    const [market_status,setMarket] = useState([])

    async function status(){
        const response = await axios.get("http://localhost:3000/onoffMarket")
        setMarket(response.data.markets)
    }
    useEffect(()=>{
        status()
    },[])

    return<>
        {market_status.map((element)=>{
            return<>
                {element.market_type}=
                {element.region}=
                {element.current_status}
                <br />
                <br />
            </>
        })}
    </>

}