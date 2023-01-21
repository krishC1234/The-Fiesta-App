import React, {useState} from 'react'
import Login from './Login/Login'
import Register from './Login/Register'
import './Login/Login.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';

function Login_Register() {
    const [pressed,setPress] = useState(true)
    return (
        <Stack
        sx={{width: '100%',}}
        alignItems="center"
        className="card-login">
            <h1 style={{color: "#000", textAlign: "center", fontSize: "50px"}}>Welcome to Fiesta</h1>
            <Tabs>
                <Tab
                    onClick={() => setPress(true)} 
                    label="Login"/>
                <Tab 
                    onClick={() => setPress(false)}
                    label="Register"/>
            </Tabs>
            {pressed? <Login/> : <Register/>}
        </Stack>
    )
}

export default Login_Register