/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {userState} from "../../store/atoms/user"
import {useSetRecoilState} from 'recoil';
import {ParseInputType} from "../../../../../common/src/index"
import { Card } from '@mui/material';
export function Signup(){
        const [username,setemail] = useState("") 
        const [password,setpassword] = useState("")  
        const userStat = useSetRecoilState(userState)
        const navigate = useNavigate()
        return (
            <center>
                <Card style={{border:"2px solid black",width:"300px",padding:"16px"}}>
                    <div >
                        <h1>welome to 1% traders</h1>
                        <TextField id="username" label="username" variant="outlined" onChange={(e)=>{setemail(e.target.value)}} />
                        <br/>
                        <TextField id="password" label="password" variant="outlined" onChange={(e)=>{setpassword(e.target.value)}} />
                        <br/>
                        <Button variant="contained" onClick={ async()=>{
                        
                            const dataTosend :ParseInputType = {
                                username:username,
                                password:password
                            }

                            const response = await axios.post("http://localhost:3000/signup",dataTosend)

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
        </Card>
        </center>
    )
}

