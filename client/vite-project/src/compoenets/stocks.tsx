/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Button from '@mui/material/Button';
// import { Watchlist } from "./watchlist";
interface fundaData{
    "Symbol": string,
    "AssetType": string,
    "Name": string,
    "Description": string,
    "CIK": string,
    "Exchange": string,
    "Currency": string,
    "Country": string,
    "Sector": string,
    "Industry": string,
    "Address": string,
    "FiscalYearEnd": string,
    "LatestQuarter": string,
    "MarketCapitalization": string,
    "EBITDA": string,
    "PERatio": string,
    "PEGRatio": string,
    "BookValue": string,
    "DividendPerShare": string,
    "DividendYield": string,
    "EPS": string,
    "RevenuePerShareTTM": string,
    "ProfitMargin": string,
    "OperatingMarginTTM": string,
    "ReturnOnAssetsTTM": string,
    "ReturnOnEquityTTM": string,
    "RevenueTTM": string,
    "GrossProfitTTM": string,
    "DilutedEPSTTM": string,
    "QuarterlyEarningsGrowthYOY": string,
    "QuarterlyRevenueGrowthYOY": string,
    "AnalystTargetPrice": string,
    "TrailingPE": string,
    "ForwardPE": string,
    "PriceToSalesRatioTTM": string,
    "PriceToBookRatio": string,
    "EVToRevenue": string,
    "EVToEBITDA": string,
    "Beta": string,
    "52WeekHigh": string,
    "52WeekLow": string,
    "50DayMovingAverage": string,
    "200DayMovingAverage": string,
    "SharesOutstanding": string,
    "DividendDate": string,
    "ExDividendDate": string
}
function useStock (){
  const {stock} = useParams()
    const [funda,setFunda] = useState<fundaData | null>(null)

    const funda_getter = async()=>{
        const res = await axios.post("http://localhost:3000/stock",{
            stock:`${stock}`
        })
        setFunda(res.data)
    }

    useEffect(()=>{
        funda_getter()
    },[])

    return {stock,funda}
}

export function Stocks(){
    const {stock , funda} = useStock()
   
    
   
    return (
        <>
          Find all the fundamentals of {stock}
          <br />
          {funda ? (
            <>
              <p>Description: {funda.Description}</p>
              <p>{funda.Sector}</p>
              <p>{funda.DividendPerShare}</p>
              <p>{funda.EBITDA}</p>
              <p>{funda.EPS}</p>
            
            </>
          ) : (
            <p>Loading data...</p>
          )}
         <Button variant="contained" onClick={async()=>{
            const res = await axios.post("http://localhost:3000/watchlist/post",{
              "_stock":stock
            },{
              headers:{
                Authorization:"bearer "+localStorage.getItem("token")
              }
            })
            alert(res.data)
         }}>
                Add to watchlist
          </Button>

          
          
        </>
      );
}
