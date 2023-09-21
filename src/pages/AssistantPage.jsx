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
import CopyrightIcon from '@mui/icons-material/Copyright'
import ViewListIcon from '@mui/icons-material/ViewList'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Rating from '@mui/material/Rating'
import ShareIcon from '@mui/icons-material/Share'
import MatrixTable from '../components/MatrixTable'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GroupsIcon from '@mui/icons-material/Groups';


const AssistantPage = () => {
    const [sw, setSw] = useState(true)
    const [miscTitle, setMiscTitle] = useState('FAVOURITE CLIENTS')
    const [miscContent, setMiscContent] = useState('No favourite selected')
    const [favColor, setFavColor] = useState(true)
    const [contactColor, setContactColor] = useState(false)
    const [msgColor, setMsgColor] = useState(false)
    const [homeClicked, setHomeClicked] = useState(true)
    const [reviewClicked, setReviewClicked] = useState(false)
    const [infoClicked, setInfoClicked] = useState(false)
    const [settingClicked, setSettingClicked] = useState(false)


    const handleFavClick = () => {
        setFavColor(true)
        setContactColor(false)
        setMsgColor(false)
        setMiscTitle("FAVOURITE CLIENTS")
        setMiscContent("No favourite selected")
    }

    const handleContactClick = () => {
        setFavColor(false)
        setContactColor(true)
        setMsgColor(false)
        setMiscTitle("CONTACTS")
        setMiscContent("No contact selected")
    }

    const handleMessageClick = () => {
        setFavColor(false)
        setContactColor(false)
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
            <div className='head'>
                <div>
                    <img src='/images/logo.png' alt='logo' height={45} />
                </div>
                <div>
                    <span className='navSpan' style={{ borderBottom: homeClicked ? '5px solid #BADF5B' : '', paddingBottom: '10px' }}><Button startIcon={<HomeIcon />} onClick={handleHomeClick} className='menus'>HOME</Button></span>
                    <span className='navSpan' style={{ borderBottom: reviewClicked ? '5px solid #BADF5B' : '', paddingBottom: '10px' }}><Button startIcon={<NotificationsIcon />} onClick={handleReviewClick} className='menus'>MY REVIEWS</Button></span>
                    <span className='navSpan' style={{ borderBottom: infoClicked ? '5px solid #BADF5B' : '', paddingBottom: '10px' }}><Button startIcon={<NewspaperIcon />} onClick={handleInfoClick} className='menus'>INFOHUB</Button></span>
                    <span className='navSpan' style={{ borderBottom: settingClicked ? '5px solid #BADF5B' : '', paddingBottom: '10px' }}><Button startIcon={<SettingsIcon />} onClick={handleSettingClick} className='menus'>SETTINGS</Button></span >
                </div>
                <div>
                    <Button startIcon={<ExitToAppIcon />} onClick={() => { window.location.href = "/login" }} >Logout</Button>
                </div>

            </div>

            <div className='container'>

                <div className='ProfilAssist'>

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
                        <div className='btn-switch'>
                            <Button size='small' style={{ background: sw ? '#C1DE6E' : '#FFF', color: sw ? '#FFF' : '#000', fontWeight: 'bold' }} variant='contained' onClick={() => { setSw(true) }}>Biography</Button>
                            <Button size='small' style={{ background: !sw ? '#C1DE6E' : '#FFF', color: !sw ? '#FFF' : '#000', fontWeight: 'bold' }} variant='contained' onClick={() => { setSw(false) }}>Availability</Button>
                        </div>
                        <div style={{ margin: '10px 0' }}>
                            {
                                sw ? (
                                    <div className='bio'>
                                        <Typography>Biographie</Typography>
                                    </div>

                                ) : (
                                    <div className='avail'>
                                        <MatrixTable />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '95%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
                            <div><Typography sx={{ fontSize: '13px' }}>Virtual skills</Typography><div className='d'></div></div>
                            <div><Typography sx={{ fontSize: '13px' }}>Web Application</Typography><div className='d'></div></div>
                            <div><Typography sx={{ fontSize: '13px' }}>Portfolio</Typography><div className='d'><p>link.to.portfolio</p><span style={{ color: '#036EFF' }} ><ShareIcon fontSize='small' /></span></div></div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
                            <div><Typography sx={{ fontSize: '13px' }}>Pricing</Typography><div className='d'></div></div>
                            <div><Typography sx={{ fontSize: '13px' }}>Professional Experience</Typography><div className='d'></div></div>
                            <div><Typography sx={{ fontSize: '13px' }}>Service Proposal</Typography><div className='d'><p>link.to.service</p><span style={{ color: '#036EFF' }} ><ShareIcon fontSize='small' /></span></div></div>
                        </div>
                    </div>
                    <div className='btn-maj'>
                        <Button variant='contained' style={{ height: '25px' }} startIcon={<DriveFileRenameOutlineIcon />}>Update profile</Button>
                    </div>
                </div>

                <div className='ReviewAssist'>

                    <div className='reviewTitle'> <NotificationsIcon /> <b>POTENTIANL REVIEWS</b></div>
                    <div className='reviewContent'>
                        <h3>No results</h3>
                        <Typography>
                            In order for the algorithm to provide potential recommendations based on your skills, please update your profile.
                        </Typography>
                    </div>

                </div>

                <div className='MiscAssist'>
                    <div className='icons'>
                        <IconButton sx={{ color: favColor ? '#036EFF' : '#B9B9B9' }} onClick={handleFavClick}><FavoriteIcon /></IconButton>
                        <IconButton sx={{ color: contactColor ? '#036EFF' : '#B9B9B9' }} onClick={handleContactClick}><GroupsIcon /></IconButton>
                        <IconButton sx={{ color: msgColor ? '#036EFF' : '#B9B9B9' }} onClick={handleMessageClick}><MailOutlineIcon /></IconButton>
                    </div>
                    <p>{miscTitle}</p>
                    <div className='MiscContent'>
                        {miscContent}
                    </div>

                </div>

            </div >

            <div className='foot'>

                <Button startIcon={<CallIcon />} className='bmenus'>Contact us</Button>
                <Button startIcon={<InfoIcon />} className='bmenus'>About us</Button>
                <Button startIcon={<ViewListIcon />} className='bmenus'>Policy</Button>
                <Button startIcon={<CopyrightIcon />} className='bmenus'>Copyright</Button>

            </div>

        </>
    )
}

export default AssistantPage