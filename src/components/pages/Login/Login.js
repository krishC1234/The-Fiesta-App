import React from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css'

function Login() {
    return (
        <div >
            <Stack>
                <div>
                    <TextField
                        fullWidth
                        required
                        id="log-email"
                        label="Email"
                        variant="filled"
                        margin="dense"
                        helperText="Please enter your email address"
                    />
                    <TextField
                        fullWidth
                        required
                        id="log-pass"
                        label="Password"
                        variant="filled"
                        type="password"
                        margin="normal"
                    />
                </div>
            </Stack>
            <div>
                <Button variant="contained" sx={{margin: "2vh"}}>Login</Button>
            </div>
        </div>
    )
}

export default Login