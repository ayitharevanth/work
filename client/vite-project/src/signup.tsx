/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {userState} from "./store/atoms/user"
import {useSetRecoilState} from 'recoil';

export function Signup(){
        const [username,setemail] = useState("") 
        const [password,setpassword] = useState("")  
        const userStat = useSetRecoilState(userState)
        const navigate = useNavigate()
        return <div >
            <h1>welome to market viewer</h1>
            <TextField id="username" label="username" variant="outlined" onChange={(e)=>{setemail(e.target.value)}} />
            <br/>
            <TextField id="password" label="password" variant="outlined" onChange={(e)=>{setpassword(e.target.value)}} />
            <br/>
            <Button variant="contained" onClick={ async()=>{
               
            

                const response = await axios.post("http://localhost:3000/signup",{
                    username:username,
                    password:password
                })

                let data = response.data
                localStorage.setItem("token",data.token)

                userStat({
                    loadering: false,
                    username: username
                })
                navigate("/News")
                // window.location.reload()

            }}>signup</Button>

        </div>
    
}

