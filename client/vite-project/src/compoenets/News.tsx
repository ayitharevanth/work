/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react"
import { SearchBar } from "./searchbar";
import axios from "axios"
import {usernameState} from "../store/selectors/user"
import {useRecoilValue} from 'recoil';


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
      <h1>Hello {username},look below whats happening</h1>
      
      {news.length  > 0 ? (
        news.map((element) => (
          <div key={element.id}>
            {element.title}
            <br />
            <br />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
