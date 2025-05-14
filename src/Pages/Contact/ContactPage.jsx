import React from 'react'
import { Box, Typography, Button, Divider, Rating, Card, CardMedia, CardActions, CardContent } from '@mui/material'
import { Maximize } from '@mui/icons-material';

const ContactPage = () => {
    return (
        <>
            <Box sx={{ py: '20px' }}>
                <Box sx={{ width: { lg: '80%' }, margin: '0 auto' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Button sx={{ color: 'gray', backgroundColor: 'rgb(245, 237, 237)', fontSize: '10px', fontWeight: '600', marginTop: '20px' }}>Contact</Button>
                        <Typography sx={{ fontSize: { xs: '20px', lg: '48px' }, fontWeight: '700', letterSpacing: '-1px' }}>We’re here to help</Typography>
                        <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography>Call us at:</Typography>
                                <Typography> 1-800-356-8933</Typography>
                            </Box>
                            <Box>
                                <svg width="24" height="80" viewBox="0 0 24 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 10L16 50L8 90" stroke="gray" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography>Email us:</Typography>
                                <Typography>suport@tecnologia.com</Typography>
                            </Box>
                        </Box>
                        <Box><Button onClick={() => { const contactSection = document.getElementById('contact-form-section'); if (contactSection) { contactSection.scrollIntoView({ behavior: 'smooth' }); } }} variant="contained" sx={{ marginRight: '20px', marginBottom: { xs: '5px', lg: '0px' }, textTransform: 'none' }} >Schedule a Free Consultation</Button></Box>
                        <Box sx={{ marginTop: '20px' }}><img src="https://i.imgur.com/LDkLFoa.gif" alt="" /></Box>
                    </Box>
                    <Box sx={{ marginTop: '20px' }}>
                        <Typography sx={{ fontSize: '48px', fontWeight: '700', color: '#0A0D31', letterSpacing: '0px' }}>Our Locations</Typography>
                        <Typography sx={{ width: '40%', marginTop: '5px', fontSize: '20px', fontWeight: '400', color: 'gray', letterSpacing: '0px' }}>We have offices throughout the East Coast, Midwest, and South — we’d love to show you around sometime. Don’t see an office in your area? We have the power to support your business, no matter the location.</Typography>
                    </Box>
                    {/*locations*/}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', width: { lg: '80%' }, margin: '20px 0', marginBottom: '50px', marginTop:'100px' }}>
                        <Box sx={{ width: { xs: '100%', lg: '20%' }, mb: 2 , borderRight: '1px solid gray',paddingRight:'80px'}}>
                            <Typography sx={{fontSize: '30px', fontWeight: '600', color: '#0A0D31', letterSpacing: '0px'}}>Florida</Typography>
                            <Typography sx={{fontSize: '20px', fontWeight: '600', letterSpacing: '0px'}}>Bonita Springs</Typography>
                            <Typography sx={{fontSize: '20px', fontWeight: '400', letterSpacing: '0px',color:'gray'}}>28200 Old 41 Rd #208 Bonita Springs, FL 34135</Typography>
                            <Button>(817) 575-6220</Button>
                            <Button>Get direction</Button>
                        </Box>
                        <Divider sx={{ width: '80%', margin: '0 auto', mb: '20px', display: { xs: 'block', lg: 'none' } }} />
                       <Box sx={{ width: { xs: '100%', lg: '20%' }, mb: 2 , borderRight: '1px solid gray',px:'80px'}}>
                             <Typography sx={{fontSize: '30px', fontWeight: '600', color: '#0A0D31', letterSpacing: '0px'}}>Georgia</Typography>
                             <Typography sx={{fontSize: '20px', fontWeight: '600', letterSpacing: '0px'}}>Atlanta</Typography>
                            <Typography sx={{fontSize: '20px', fontWeight: '400', letterSpacing: '0px',color:'gray'}}>3565 Piedmont Rd NEBuilding 2, Suite 200 Atlanta GA 30222</Typography>
                            <Button>(817) 575-6220</Button>
                            <Button>Get direction</Button>
                        </Box>
                       <Box sx={{ width: { xs: '100%', lg: '20%' }, mb: 2 ,paddingLeft:'80px'}}>
                             <Typography sx={{fontSize: '30px', fontWeight: '600', color: '#0A0D31', letterSpacing: '0px'}}>Kansas</Typography>
                             <Typography sx={{fontSize: '20px', fontWeight: '600', letterSpacing: '0px'}}>Kansas City</Typography>
                            <Typography sx={{fontSize: '20px', fontWeight: '400', letterSpacing: '0px',color:'gray'}}>12421 W. 151st St., Suite 100 Olathe, KS 66000</Typography>
                            <Button>(817) 575-6220</Button>
                            <Button>Get direction</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ContactPage
