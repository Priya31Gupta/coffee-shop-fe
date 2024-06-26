
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './signin.css';
import { useHistory } from 'react-router-dom';


function SignInComponent(){
  const [email, setEmail]= React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  const signin = async()=>{
    try {
        const response = await fetch('https://coffee-shop-r4a2.onrender.com/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (!response.ok) {
          throw new Error('Failed to sign in');
        }
  
        const data = await response.json();
  
        // You can also store token in localStorage or sessionStorage
        localStorage.setItem('token', JSON.stringify(data.token));
        localStorage.setItem('user', JSON.stringify(data.user));
        console.log({data});
        if(data){
          navigate(-1);
        }
        
      } catch (error) {
        console.log({error})
      }
  }
    return(
        <>
            <Box>
                <Card sx={{width: '30%', justifySelf:'center', margin:'auto', marginTop:"5%",padding:'5%'}}>
                    <div className="title-signup">
                     <img src='https://res.cloudinary.com/dtzzxe28w/image/upload/v1691701503/coffee-cup_ifepna.jpg' alt='coffee-cup' className='coffee-cup'/>
                      <strong>Coffee Shop</strong>
                      <img src='https://res.cloudinary.com/dtzzxe28w/image/upload/v1691701503/coffee-cup_ifepna.jpg' alt='coffee-cup' className='coffee-cup'/>  
                    </div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        defaultValue=""
                        sx={{marginBottom:'20px', width: "100%"}}
                        value={email}
                        onChange={(event)=>{setEmail(event.target.value)}}
                    />
                    <br/>
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        sx={{marginBottom:'20px',width: "100%"}}
                        value={password}
                        onChange={(event)=>{setPassword(event.target.value)}}
                    />
                <Button
                    variant='contained'
                    className='signup-btn'
                    onClick={signin}
                > SignIn</Button>
                </Card>
                
            </Box>
        </>
    )
}
export default SignInComponent;
