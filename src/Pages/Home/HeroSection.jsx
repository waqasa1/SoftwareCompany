import React from 'react'
import { Box, Typography, Button, Divider, Rating } from '@mui/material'
import hero from '../../assets/heroimage.webp'


const HeroSection = () => {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, maxWidth: '1500px', margin: '0 auto', px: '50px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', my: 'auto', marginRight: '-200px' }}>
                    <Typography sx={{ fontSize: { xs: '2rem', lg: '4.5rem' }, lineHeight: '1em', letterSpacing: '-1px', marginBottom: '20px', fontWeight: '600', }}>We manage your IT, so you can manage your business.</Typography>
                    <Typography sx={{ fontSize: { xs: '1rem', lg: '2rem' } }}>Take charge of your business continuity with innovative IT solutions</Typography>
                    <Box sx={{ marginTop: '10px' }} >
                        <Button variant="contained" sx={{ marginRight: '20px', marginBottom: { xs: '5px' } }}>Schedule a Free Consultation</Button>
                        <Button variant="contained">Services</Button>
                    </Box>
                </Box>

                <Box sx={{ marginTop: { xs: '15px' }, px: { lg: '50px' }, display: 'flex', justifyContent: 'end' }}><Box component='img' src={hero} height={500} width={800} sx={{ clipPath: 'polygon(27% 0, 100% 0, 100% 20%, 100% 100%, 80% 100%, 20% 100%, 1% 100%, 28% 52%)', height: { xs: '200px', lg: '500px' }, width: { xs: '300px', lg: '800px' } }} /></Box>
            </Box>
            <Divider sx={{ py: '20px', width: '80%', margin: '0 auto' }} />
            <Box sx={{ display: 'flex', maxWidth: '1500px', margin: '0 auto', justifyContent: 'space-between' }}>
                <Box>Reviewed on Clutch <Rating name="read-only" value={5} readOnly sx={{ color: 'red' }} size="small" />31 reviews</Box>
                <Box>20
                    Years
                    Proven Track Record</Box>
                <Box>98
                    %
                    Customer Satisfaction</Box>
                <Box>1,500
                    Projects
                    We Have Completed</Box>
                <Box>3
                    Mins
                    Average Answer Time</Box>
            </Box>
        </>
    )
}

export default HeroSection
