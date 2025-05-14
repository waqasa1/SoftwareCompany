import React from 'react'
import { Box, Typography, Button, Divider, Rating, Card, CardMedia, CardActions, CardContent } from '@mui/material'

const ContactPage = () => {
    return (
        <>
            <Box sx={{ py: '20px' }}>
                <Box sx={{ width: { lg: '80%' }, margin: '0 auto' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Button sx={{ color: 'gray', backgroundColor: 'rgb(245, 237, 237)', fontSize: '10px', fontWeight: '600', marginTop: '20px' }}>Contact</Button>
                        <Typography sx={{ fontSize: { xs: '20px', lg: '48px' }, fontWeight: '700', letterSpacing: '-1px' }}>We’re here to help</Typography>
                        <Box sx={{ display: 'flex', gap: '20px' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography>Call us at:</Typography>
                                <Typography> 1-800-356-8933</Typography>
                            </Box>
                            <Box>
                                <svg width="24" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 6L15 12L9 18" stroke="gray" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography>Email us:</Typography>
                                <Typography>suport@tecnologia.com</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ContactPage
