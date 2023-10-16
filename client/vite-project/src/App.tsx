/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Appbar } from "./Appbar";
import { Signup } from "./signup";
import { Signin } from "./sigin";
import { News } from "./News";
import { Onoffmarket } from "./onoffmarket";
import { Gainer_loser } from "./gainerLoser";
import {RecoilRoot,useSetRecoilState} from 'recoil';
import { Sentiment } from "./sentiment";
import { Stocks } from "./stocks";
import {userState} from "./store/atoms/user"
import { Watchlist } from "./watchlist";

function App() {
  // Call initUser function within the App component
  
  
  
  return (
    
    <RecoilRoot>
      
      <Router>
        <Appbar/>
        <Inituser/>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin  />} />
          <Route path="/News" element={<News />} />
          <Route path="/open-markets" element={<Onoffmarket />} />
          <Route path="/gainer-loser" element={<Gainer_loser />} />
          <Route path="/sentiment" element={<Sentiment />} />
          <Route path="/stock/:stock" element={<Stocks/>}/>
          <Route path="/watch" element={<Watchlist/>}/>

        </Routes>
      </Router>

    </RecoilRoot>
  );
}

function Inituser(){
  // const [username,setUsername] = useState("")
  const setUser = useSetRecoilState(userState)
 
  const init = ()=>{
    fetch("http://localhost:3000/me", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        console.log(data.username);
        setUser({
          loadering:false,
          username:data.username
        });
      });
    });
  }
  init()
  
  return<></>
}








export default App;
