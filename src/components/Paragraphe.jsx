import { Box, Typography } from '@mui/material'
import React from 'react'

const Paragraphe = ({ title, content }) => {
    return (
        <>
            <Box>
                <b>{title}</b>
                <Typography>{content}</Typography>
            </Box>
        </>
    )
}

export default Paragraphe