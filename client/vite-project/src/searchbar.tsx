/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState} from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
interface element{
  "1. symbol": string,
  "2. name": string,
  "3. type": string,
  "4. region": string,
  "5. marketOpen": string,
  "6. marketClose": string,
  "7. timezone": string,
  "8. currency": string,
  "9. matchScore": string
}
export function SearchBar() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState<element[]>([]);
  const navigate = useNavigate()
  const fetch_data = async(value) => {
    let response = await axios.post("http://localhost:3000/ticker",{
      ticker:value
    })
    console.log(response.data)
    setFilteredData(response.data || []) 
    console.log(filteredData)
  };

  const handleInputChange = (value) => {
    setSearch(value);
    fetch_data(value);
  };

  

  
  return (
    <div>
      <TextField
        label="Search a stock"
        variant="outlined"
        fullWidth
        InputProps={{
          startAdornment: <SearchIcon sx={{ color: "gray", marginRight: 1 }} />,
        }}
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
      />
      <div>
        
        <ul>
          
        {filteredData.length > 0 ? (
            filteredData.map((ele: element) => {
              return (
                <li >
                 <a target="_blank" onClick={()=>{
                   const stockSymbol = ele["1. symbol"];
                   navigate(`/stock/${stockSymbol}`);
                 }}>{ele["1. symbol"]}</a>
                  <br />
                  <br />
                </li>
              );
            })
          ) : (
            <li>No results found</li>
          )}
        </ul>
      </div>
    </div>
  );

}