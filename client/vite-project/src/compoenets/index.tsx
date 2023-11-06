/* eslint-disable @typescript-eslint/no-var-requires */
import Button from '@mui/material/Button/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export function Index(){
    const navigate = useNavigate()
    return<>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
            <Typography variant="h5" gutterBottom>
                Welcome to 1% Trader  Your Gateway to Informed Trading!

                Are you ready to elevate your trading buisness join the ranks of the top 1% of traders who consistently outperform the market? At 1% Trader, we're dedicated to providing you with the latest news, real-time market sentiments, and in-depth fundamentals of stocks to empower your trading decisions.
            </Typography>
            </div>

            <div>
                <img src="https://i.ibb.co/jkXM7NH/pic12.jpg" alt="foto" style={{width:"350px"}} />
            </div>
        </div>
        <hr />
        <div style={{display:'flex',justifyContent:'space-between'}}>
            
            <div>
                <img src="https://i.ibb.co/7Q2MVHm/pic21.jpg" alt="foto" style={{width:"350px",margin:"10px"}} />
            </div>
            
            <div>
            <Typography variant="h3" gutterBottom>
                    what are you waiting for? its free!
                    sigup up now! <br />
                    <Button variant="contained" onClick={()=>{
                        navigate("/signup")
                    }}>signup</Button>
                    
            </Typography>
            </div>

            
        </div>
    </>
    

}