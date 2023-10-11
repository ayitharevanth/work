/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react"
import { SearchBar } from "./searchbar";
import axios from "axios"
import {usernameState} from "./store/selectors/user"
import {useRecoilValue} from 'recoil';
export function News() {
  const [news, setNews] = useState([]);
  const username = useRecoilValue(usernameState)

  async function newsGetter() {
    const response = await axios.get("http://localhost:3000/News");
    setNews(response.data.feed);
  }

  useEffect(() => {
    newsGetter();
  }, []);

  return (
    <>
    
      <SearchBar />
      <h1>Hello {username},look below whats happening</h1>
      {news.map((element) => (
        <div key={element.id}>
          {element.title}
          <br />
          <br />
        </div>
      ))}
    </>
  );
}
