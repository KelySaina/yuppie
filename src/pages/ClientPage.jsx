import React, { useState } from 'react'
import '../styles/LoginPageStyle.css'
import { Button, IconButton, Typography } from '@mui/material'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import HomeIcon from '@mui/icons-material/Home'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SettingsIcon from '@mui/icons-material/Settings'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import CallIcon from '@mui/icons-material/Call'
import InfoIcon from '@mui/icons-material/Info'
import AddIcon from '@mui/icons-material/Add'
import CopyrightIcon from '@mui/icons-material/Copyright'
import ViewListIcon from '@mui/icons-material/ViewList'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Rating from '@mui/material/Rating'
import ShareIcon from '@mui/icons-material/Share'
import MatrixTable from '../components/MatrixTable'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const ClientPage = () => {
    const [miscTitle, setMiscTitle] = useState('FAVOURITE ASSISTANTS')
    const [miscContent, setMiscContent] = useState('No favourite selected')
    const [favColor, setFavColor] = useState(true)
    const [msgColor, setMsgColor] = useState(false)
    const [homeClicked, setHomeClicked] = useState(true)
    const [reviewClicked, setReviewClicked] = useState(false)
    const [infoClicked, setInfoClicked] = useState(false)
    const [settingClicked, setSettingClicked] = useState(false)


    const handleFavClick = () => {
        setFavColor(true)
        setMsgColor(false)
        setMiscTitle("FAVOURITE ASSISTANT")
        setMiscContent("No favourite selected")
    }

    const handleMessageClick = () => {
        setFavColor(false)
        setMsgColor(true)
        setMiscTitle("MESSAGES")
        setMiscContent("No message")
    }

    const handleHomeClick = () => {
        setHomeClicked(true)
        setInfoClicked(false)
        setReviewClicked(false)
        setSettingClicked(false)
    }

    const handleReviewClick = () => {
        setHomeClicked(false)
        setInfoClicked(false)
        setReviewClicked(true)
        setSettingClicked(false)
    }

    const handleInfoClick = () => {
        setHomeClicked(false)
        setInfoClicked(true)
        setReviewClicked(false)
        setSettingClicked(false)
    }

    const handleSettingClick = () => {
        setHomeClicked(false)
        setInfoClicked(false)
        setReviewClicked(false)
        setSettingClicked(true)
    }

    return (
        <>
            <div style={{ overflowY: 'hidden' }}>
                <div className='head'>
                    <div>
                        <img src='/images/logo.png' alt='logo' height={45} />
                    </div>
                    <div>
                        <span className='cnavSpan' style={{ borderBottom: homeClicked ? '5px solid #BADF5B' : '', paddingBottom: '10px' }}><Button startIcon={<HomeIcon />} onClick={handleHomeClick} className='cmenus'>HOME</Button></span>
                        <Button sx={{ background: '#FF5757' }} size="small" startIcon={<AddIcon />} onClick={handleHomeClick} className='cmenus' variant='contained' >NEW PROJECT</Button>
                        <span className='cnavSpan' style={{ borderBottom: reviewClicked ? '5px solid #BADF5B' : '', paddingBottom: '10px' }}><Button startIcon={<NotificationsIcon />} onClick={handleReviewClick} className='cmenus'>MY PROJECTS</Button></span>
                        <span className='cnavSpan' style={{ borderBottom: infoClicked ? '5px solid #BADF5B' : '', paddingBottom: '10px' }}><Button startIcon={<NewspaperIcon />} onClick={handleInfoClick} className='cmenus'>INFOHUB</Button></span>
                        <span className='cnavSpan' style={{ borderBottom: settingClicked ? '5px solid #BADF5B' : '', paddingBottom: '10px' }}><Button startIcon={<SettingsIcon />} onClick={handleSettingClick} className='cmenus'>SETTINGS</Button></span >
                    </div>
                    <div>
                        <Button startIcon={<ExitToAppIcon />} onClick={() => { window.location.href = "/login" }} >Logout</Button>
                    </div>

                </div>

                <div className='container'>

                    <div className='ProfilClient'>

                        <div style={{ width: '100%', opacity: '0.6', textAlign: 'center', marginTop: '5px' }} ><Typography sx={{ background: '#E8E8E8', color: '#FFF', padding: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} ><AccountCircleOutlinedIcon /> PROFIL</Typography></div>
                        <div className='Infos'>
                            <div style={{ width: '150px' }}><img src="/images/assistPro.webp" alt='pdp' width={150} height={150} /></div>
                            <div >
                                <Typography sx={{ fontSize: '19px' }}><b>Prenom, Nom</b></Typography>
                                <Typography sx={{ fontSize: '15px' }}>Status Professionnel</Typography>
                                <Typography sx={{ fontSize: '12px' }}>Pays, Ville</Typography>
                                <div><Rating name="read-only" value={0} readOnly sx={{ color: 'yellow' }} /></div>
                                <div className='ln'><p>link.to.prof</p><span style={{ color: '#036EFF' }} ><ShareIcon fontSize='small' /></span></div>
                            </div>
                        </div>
                        <hr style={{ width: '100%', color: '#FFF' }} />

                        <div className='switcher'>
                            <div>
                                <Typography sx={{ background: '#036EFF', margin: '3px', width: '150px', padding: '1px', borderRadius: '3px', textAlign: 'center' }}><b>Biography</b></Typography>
                                <div className='cbio'>
                                    <Typography>Biographie</Typography>
                                </div>
                                <Typography sx={{ background: '#036EFF', margin: '3px', width: '150px', padding: '1px', borderRadius: '3px', textAlign: 'center' }}><b>Availability</b></Typography>

                                <div className='cavail'>
                                    <MatrixTable />
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-around', width: '95%' }}>
                                <div style={{ width: '50%' }}>
                                    <div className='c'>
                                        <Typography sx={{ fontSize: '13px' }}><span style={{ color: '#036EFF' }}>Notes:</span></Typography>
                                    </div>
                                </div>
                                <div>
                                    <div><Typography sx={{ fontSize: '13px' }}>Portfolio</Typography><div className='d'><p>link.to.portfolio</p><span style={{ color: '#036EFF' }} ><ShareIcon fontSize='small' /></span></div></div>
                                </div>
                            </div>
                        </div>

                        <div className='btn-maj'>
                            <Button variant='contained' style={{ height: '25px' }} startIcon={<DriveFileRenameOutlineIcon />}>Update profile</Button>
                        </div>
                    </div>

                    <div className='ReviewClient'>

                        <div className='reviewTitle'> <NotificationsIcon /> <b>POTENTIANL REVIEWS</b></div>
                        <div className='reviewContent'>
                            <h3>No results</h3>
                            <Typography>
                                In order for the algorithm to provide potential recommendations based on your skills, please update your profile.
                            </Typography>
                        </div>

                    </div>

                    <div className='MiscClient'>
                        <div className='icons'>
                            <IconButton sx={{ color: favColor ? '#036EFF' : '#B9B9B9' }} onClick={handleFavClick}><FavoriteIcon /></IconButton>
                            <IconButton sx={{ color: msgColor ? '#036EFF' : '#B9B9B9' }} onClick={handleMessageClick}><MailOutlineIcon /></IconButton>
                        </div>
                        <p>{miscTitle}</p>
                        <div className='MiscContent'>
                            {miscContent}
                        </div>

                    </div>
                </div>

                <div className='foot'>

                    <Button startIcon={<CallIcon />} className='bmenus'>Contact us</Button>
                    <Button startIcon={<InfoIcon />} className='bmenus'>About us</Button>
                    <Button startIcon={<ViewListIcon />} className='bmenus'>Policy</Button>
                    <Button startIcon={<CopyrightIcon />} className='bmenus'>Copyright</Button>

                </div>
            </div>

        </>
    )
}

export default ClientPage