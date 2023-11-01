/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react"
import Button from '@mui/material/Button';
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';

export function Watchlist(){
    const [stocks,setStocks] = useState([])
    async function watchlist_getter(){
        const res = await axios.get("http://localhost:3000/watchlist/get",{
            headers:{
                Authorization:"bearer "+localStorage.getItem("token")
            }
        })
        
        setStocks(res.data.stocks)
    }
    useEffect(()=>{

      setInterval(watchlist_getter,2000)

    },[])
   
    async function remove(stock){
        const res = await axios.delete("http://localhost:3000/watchlist/delete", {
          headers: {
            Authorization: "bearer " + localStorage.getItem("token")
          },
          data: {
            stockname:stock
          }
        });
        console.log(res.data)
    }
    return (
       <>
        {stocks.length  > 0 ? (
            stocks.map((element) => (
          <div >
            {element} <Button onClick={()=>{remove(element)}} variant="outlined" startIcon={<DeleteIcon />} color="error" size="small">remove</Button>
            <br />
            <br />
          </div>
        ))
      ) : (
        <p>no stocks !</p>
      )}
       </>
    );
}