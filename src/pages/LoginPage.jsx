import React, { useState } from 'react'
import '../styles/LoginPageStyle.css'
import { Box, TextField, Typography, Button, Divider, Card, FormGroup, FormControlLabel, Checkbox, IconButton, InputAdornment } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const LoginPage = () => {

    const [openForgot, setOpenForgot] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const handleTogglePassword = () => {
        setShowPassword(!showPassword)
    };

    return (
        <>
            <div className='container'>
                <div className='sectionLeft'>
                    <img src='/images/logo.png' alt='logo' />
                    <i>Be ambitious with your skills!</i>
                </div>

                <div className='sectionRight'>
                    {
                        !openForgot ?

                            (<Card className='boxLogin'>
                                <Box className='boxLogin'>
                                    <Typography sx={{ marginBottom: '20px', color: '#036EFF', fontSize: '30px' }}>Client connexion</Typography>

                                    <TextField sx={{ marginTop: '20px' }} label="E-mail" type="text" name="username" size="small" fullWidth />
                                    <TextField sx={{ marginTop: '20px' }} label="Password" type={showPassword ? 'text' : 'password'} name="password" size="small" fullWidth InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleTogglePassword}
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }} />
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Remember me" />
                                    </FormGroup>

                                    <Button sx={{ marginTop: '5px', color: '#B9B9B9' }} variant='text' onClick={() => setOpenForgot(true)} fullWidth>Forgot password?</Button>
                                    <Button sx={{ marginTop: '20px' }} variant='contained' fullWidth>Login</Button>
                                    <Button sx={{ marginTop: '10px', marginBottom: '10px', color: '#C1DE6E', borderColor: '#C1DE6E' }} variant='outlined' fullWidth>Login as Assistant</Button>

                                </Box>

                                <Divider sx={{ width: '100%' }} />

                                <Box className='boxLogin'>
                                    <Typography sx={{ marginBottom: '10px', color: '#036EFF' }}>You don't have an account yet?</Typography>
                                    <Button sx={{ background: '#C1DE6E' }} variant='contained' fullWidth>Sign Up</Button>
                                </Box>

                            </Card>)
                            :
                            (<Card className='boxForgot'>
                                <Box>
                                    <IconButton onClick={() => setOpenForgot(false)}>
                                        <ArrowBackIcon />
                                    </IconButton>
                                    <Typography style={{ marginTop: '20px', color: '#036EFF' }}>Please, fill in your mail adress to reinitialize your password</Typography>
                                    <TextField sx={{ marginTop: '20px' }} label="E-mail" size='small' fullWidth />
                                    <Button sx={{ marginTop: '10px' }} variant='contained' fullWidth>Submit</Button>
                                </Box>

                            </Card>)
                    }



                </div>
            </div>
        </>
    )
}

export default LoginPage