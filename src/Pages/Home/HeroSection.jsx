import React from 'react'
import { Box, Typography,Button,Divider } from '@mui/material'
import hero from '../../assets/heroimage.webp'

const HeroSection = () => {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'row', maxWidth:'1500px', margin:'0 auto', marginTop:'20px', px:'50px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', my: 'auto' }}>
                    <Typography sx={{ fontSize: 'clamp(3rem, 4.5rem, 5vw)', lineHeight: '1em', letterSpacing: '-2px', marginBottom: '20px', fontWeight: '600', width: '700px' }}>We manage your IT, so you can manage your business.</Typography>
                    <Typography sx={{ fontSize: 'clamp(1.6rem, 2rem, 2.55vw)' }}>Take charge of your business continuity with innovative IT solutions</Typography>
                    <Box sx={{marginTop:'10px'}} >
                        <Button variant="contained"sx={{ marginRight: '20px' }}>Schedule a Free Consultation</Button>
                        <Button variant="contained">Services</Button>
                    </Box>
                </Box>

                <Box sx={{px:'50px'}}><Box component='img' src={hero} height={500} width={800} sx={{ clipPath: 'polygon(27% 0, 100% 0, 100% 20%, 100% 100%, 80% 100%, 20% 100%, 1% 100%, 28% 52%)' }} /></Box>
            </Box>
            <Divider sx={{py:'20px', width:'80%', margin:'0 auto'}}/>
        </>
    )
}

export default HeroSection
