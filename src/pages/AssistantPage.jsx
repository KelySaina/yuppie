import React, { useState } from 'react'
import '../styles/LoginPageStyle.css'
import { Button, Typography } from '@mui/material'
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


const AssistantPage = () => {
    const [sw, setSw] = useState(true)

    return (
        <>
            <div className='head'>
                <div>
                    <img src='/images/logo.png' alt='logo' height={45} />
                </div>
                <div>
                    <Button startIcon={<HomeIcon />} className='menus'>HOME</Button>
                    <Button startIcon={<NotificationsIcon />} className='menus'>MY REVIEWS</Button>
                    <Button startIcon={<NewspaperIcon />} className='menus'>INFOHUB</Button>
                    <Button startIcon={<SettingsIcon />} className='menus'>SETTINGS</Button>
                </div>
                <div>
                    <Button startIcon={<ExitToAppIcon />} >Logout</Button>
                </div>

            </div>

            <div className='content'>

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
                            <Button size='small' className='menus' variant='contained' onClick={() => { setSw(true) }}>Biography</Button>
                            <Button size='small' className='menus' variant='contained' onClick={() => { setSw(false) }}>Availability</Button>
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
                        <Button variant='contained' style={{ height: '25px' }} startIcon={<DriveFileRenameOutlineIcon />} fullwidth>Update profile</Button>
                    </div>
                </div>

                <div className='ReviewAssist'>

                </div>

                <div className='MiscAssist'>

                </div>

            </div>

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