import React, { useState } from 'react'
import '../styles/LoginPageStyle.css'
import { Box, TextField, Typography, Button, Card, FormGroup, FormControlLabel, Checkbox, IconButton, InputAdornment, Modal } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import Paragraphe from '../components/Paragraphe';


const SignupPage = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [isClicked, setIsClicked] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);
    const [openTerm, setOpenTerm] = useState(false)
    const [openPolicy, setOpenPolicy] = useState(false)

    const handleTogglePassword = () => {
        setShowPassword(!showPassword)
    };

    const handleAssistant = () => {
        setIsClicked(!isClicked)
        setIsClicked2(false)
    }
    const handleClient = () => {
        setIsClicked2(!isClicked2)
        setIsClicked(false)
    }

    const buttonStyleAssist = { marginTop: '10px', background: isClicked ? '#c1de6e' : '#FFF', width: '45%', color: isClicked ? '#fff' : '#036EFF' }
    const buttonStyleClient = { marginTop: '10px', background: isClicked2 ? '#c1de6e' : '#FFF', width: '45%', color: isClicked2 ? '#fff' : '#036EFF' }

    return (
        <>
            <div className='container'>
                <div className='sectionLeft'>
                    <img src='/images/logo.png' alt='logo' />
                    <i>Be ambitious with your skills!</i>
                </div>

                <div className='sectionRight'>

                    <Card className='boxLogin'>
                        <Box className='boxLogin'>
                            <IconButton onClick={() => window.location.href = "/login"}>
                                <ArrowBackIcon />
                            </IconButton>

                            <TextField sx={{ marginTop: '10px' }} label="Name" type="text" name="name" size="small" fullWidth />
                            <TextField sx={{ marginTop: '10px' }} label="Surname" type="text" name="surname" size="small" fullWidth />
                            <TextField sx={{ marginTop: '10px' }} label="E-mail" type="mail" name="email" size="small" fullWidth />
                            <TextField sx={{ marginTop: '10px' }} label="Password" type={showPassword ? 'text' : 'password'} name="password" size="small" fullWidth InputProps={{
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
                            <TextField sx={{ marginTop: '10px' }} label="Confirm pasword" type={showPassword ? 'text' : 'password'} name="cpassword" size="small" fullWidth InputProps={{
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
                            <Typography style={{ marginTop: '20px', color: '#036EFF' }}>Sign up as {isClicked ? "Assistant" : ""}{isClicked2 ? "Client" : ""}</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                <Button sx={buttonStyleAssist} onClick={handleAssistant} variant='contained'>Assistant</Button>
                                <Button sx={buttonStyleClient} onClick={handleClient} variant='contained'>Client</Button>
                            </Box>

                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label={<Typography sx={{ fontSize: '12px' }}>I have read and agree to the <span onClick={() => setOpenTerm(true)}>Terms of use</span> and the <span onClick={() => setOpenPolicy(true)}>Confidentiality policy</span></Typography>} />
                            </FormGroup>

                            <Button sx={{ marginTop: '20px' }} variant='contained' fullWidth>Sign Up</Button>

                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Remember me" />
                            </FormGroup>

                        </Box>

                    </Card>
                </div>

                <Modal open={openTerm}>

                    <Card className='boxForgot'>
                        <IconButton onClick={() => { setOpenTerm(false) }}>
                            <CloseIcon />
                        </IconButton>

                    </Card>
                </Modal>
                <Modal open={openPolicy}>

                    <Card className='boxForgot'>
                        <IconButton onClick={() => { setOpenPolicy(false) }}>
                            <CloseIcon />
                        </IconButton>

                    </Card>
                </Modal>
            </div>
        </>
    )
}

export default SignupPage