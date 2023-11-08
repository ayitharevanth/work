/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react"
import { SearchBar } from "./searchbar";
import axios from "axios"
import {usernameState} from "../store/selectors/user"
import {useRecoilValue} from 'recoil';
import { Typography } from "@mui/material";


function useNews(){
  const [news, setNews] = useState([]);
  const username = useRecoilValue(usernameState)

  async function newsGetter() {
    const response = await axios.get("http://localhost:3000/News");
    setNews(response.data.feed);
  }

  useEffect(() => {
    newsGetter();
  }, []);

  return {news,username}
}
export function News() {
  
  const {news,username} = useNews()
 
  return (
    
    <>
      
      <SearchBar />
      <Typography variant="h3" gutterBottom>
       Hello {username},look below whats happening
      </Typography>
      <hr />
      
      {news.length  > 0  ? (
        news.map((element) => (
          
          <Typography variant="subtitle1" gutterBottom>
            <hr />
            <div key={element.id}>
              {element.title}
              <a href={element.url} target="_blank">click to read more</a>
              <hr />
              <br />
              
            </div>
          </Typography>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
