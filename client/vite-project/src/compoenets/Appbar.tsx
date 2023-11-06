/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import Button from '@mui/material/Button';

import {useNavigate} from 'react-router-dom'

import {usernameState} from '../store/selectors/user'

import {useRecoilValue} from 'recoil';




export function Appbar(){
    const navigate = useNavigate()
    const username = useRecoilValue(usernameState)
    
    if(username){
        return <div style={{
            display:"flex",
            justifyContent:"space-between"
        }}>    
            <div>
                <h5 onClick={()=>{navigate("/News")}}>1% traders</h5>
       
            </div>
            <div>
            <Button variant='contained' style={{margin:"10px"}} onClick={()=>{
                navigate("/gainer-loser")
            }}>gainerLoser</Button>

            <Button variant='contained' style={{margin:"10px"}} onClick={()=>{
                navigate("/sentiment")
            }}>sentiment</Button>

            <Button variant='contained' style={{margin:"10px"}} onClick={()=>{
                navigate("/watchlists")
            }}>watchlist</Button>

            <Button variant='contained'  style={{margin:"10px"}} onClick={()=>{
                navigate("/open-markets")
            }}>open markets</Button>
            
            
            <Button variant="contained" style={{margin:"10px"}} color="error" onClick={()=>{
                localStorage.setItem("token",null)
                navigate("/signin")
                window.location.reload()

            }} >logout</Button>
            
            </div>
    
        </div>
    }else{
        return <div style={{
            display:"flex",
            justifyContent:"space-between"
        }}>    
            <div>
                <h5 onClick={()=>{navigate("/News")}}>1% traders</h5>
       
            </div>
            <div>
            <Button variant="contained" onClick={()=>{
                navigate("/signin")
            }} >signin</Button>
            <Button variant="contained"onClick={()=>{
                navigate("/signup")
            }} >signup</Button>
            </div>
    
        </div>
    }
            
    
    
}

