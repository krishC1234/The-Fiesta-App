import React from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css'

function Register() {
    return (
        <div >
            <Stack>
                <div>
                    <TextField
                        fullWidth
                        required
                        id="reg-name"
                        label="Name"
                        variant="filled"
                        margin="dense"
                        helperText="Please enter your name"
                    />
                    <TextField
                        fullWidth
                        required
                        id="reg-email"
                        label="Email"
                        variant="filled"
                        margin="dense"
                        helperText="Please enter your email address"
                    />
                    <TextField
                        fullWidth
                        required
                        id="reg-pass"
                        label="Password"
                        variant="filled"
                        type="password"
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        required
                        id="reg-pass-again"
                        label="Confirm Password"
                        variant="filled"
                        type="password"
                        margin="normal"
                    />
                </div>
            </Stack>
            <div>
                <Button variant="contained" sx={{margin: "2vh"}}>Register</Button>
            </div>
        </div>
    )
}

export default Register