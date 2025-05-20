import React from 'react'
import { Box, Typography, Button, Divider} from '@mui/material'
import { Maximize } from '@mui/icons-material';

const ContactPage = () => {
    return (
        <>
            <Box sx={{ py: '20px' }}>
                <Box sx={{ width: { lg: '80%' }, margin: '0 auto' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Button sx={{ color: 'gray', backgroundColor: 'rgb(245, 237, 237)', fontSize: '10px', fontWeight: '600', marginTop: '20px' }}>Contact</Button>
                        <Typography data-aos="fade" data-aos-delay="200" sx={{ fontSize: { xs: '20px', lg: '48px' }, fontWeight: '700', letterSpacing: '-1px', marginTop: '10px' }}>We’re here to help</Typography>
                        <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center', flexDirection: { xs: 'column', lg: 'row' }, marginBottom: '10px' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography>Call us at:</Typography>
                                <Typography> 1-800-356-8933</Typography>
                            </Box>
                            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                                <svg data-aos="slide-right"
            data-aos-delay="200" width="24" height="80" viewBox="0 0 24 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 10L16 50L8 90" stroke="gray" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Box>
                            <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
                                <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 8L50 16L90 8" stroke="gray" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography>Email us:</Typography>
                                <Typography>suport@tecnologia.com</Typography>
                            </Box>
                        </Box>
                        <Box><Button onClick={() => { const contactSection = document.getElementById('contact-form-section'); if (contactSection) { contactSection.scrollIntoView({ behavior: 'smooth' }); } }} variant="contained" sx={{ marginRight: '20px', marginBottom: { xs: '5px', lg: '0px' }, textTransform: 'none' }} >Schedule a Free Consultation</Button></Box>
                        <Box sx={{ marginTop: '20px', backgroundImage: 'url("https://tecnologia.vamtam.com/wp-content/uploads/2023/04/pexels-photomix-company-518244.jpg")', width: '1280px', height: '350px', maxWidth: '100%', backgroundSize: { xs: 'contain', lg: 'cover' }, backgroundRepeat: 'no-repeat' }}></Box>
                    </Box>
                    <Box sx={{ marginTop: '20px', px: '10px' }}>
                        <Typography sx={{ fontSize: '48px', fontWeight: '700', color: '#0A0D31', letterSpacing: '0px' }}>Our Locations</Typography>
                        <Typography sx={{ width: { lg: '40%' }, marginTop: '5px', fontSize: '20px', fontWeight: '400', color: 'gray', letterSpacing: '0px' }}>We have offices throughout the East Coast, Midwest, and South — we’d love to show you around sometime. Don’t see an office in your area? We have the power to support your business, no matter the location.</Typography>
                    </Box>
                    {/*locations*/}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', width: { lg: '80%' }, margin: '20px 0', marginBottom: '50px', marginTop: '100px' }}>
                        <Box sx={{ width: { xs: '100%', lg: '20%' }, mb: 2, borderRight: '1px solid gray', px: '50px', paddingLeft: { xs: '80px', lg: '' } }}>
                            <Typography sx={{ fontSize: '30px', fontWeight: '600', color: '#0A0D31', letterSpacing: '0px' }}>Florida</Typography>
                            <Typography sx={{ fontSize: '20px', fontWeight: '600', letterSpacing: '0px' }}>Bonita Springs</Typography>
                            <Typography sx={{ fontSize: '20px', fontWeight: '400', letterSpacing: '0px', color: 'gray' }}>28200 Old 41 Rd #208 Bonita Springs, FL 34135</Typography>
                            <Button href="tel:(817) 575-6220" sx={{
                                color: 'gray', fontSize: '20px', fontWeight: '400', marginLeft: '-8px',
                                ":hover": {
                                    color: 'blue',
                                    background: 'none'
                                }
                            }}>
                                {'(817) 575-6220'}
                            </Button>
                            <Button
                            onClick={()=>window.open(`https://www.google.com/maps/place/28200+Old+41+Rd+%23208,+Bonita+Springs,+FL+34135,+USA/@26.3286151,-81.7834777,17z/data=!3m1!4b1!4m6!3m5!1s0x88db1980fda97993:0x19955ffaffb85928!8m2!3d26.3286151!4d-81.781289!16s%2Fg%2F11mbm_j9l_?q=28200+Old+41+Rd+%23208+Bonita+Springs,+FL+34135&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjiz9Ozvo3-AhWlSvEDHcniATYQ_AUoAXoECCwQAw&coh=164777&entry=tt&shorturl=1`, '_blank')}
                             sx={{
                                fontSize: '12px', textTransform: 'none', color: 'blue', fontWeight: 'bold', marginLeft: '-5px',
                                ":hover": {
                                    color: 'black',
                                    background: 'none'
                                },
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    bottom: '10px',
                                    height: '1px',
                                    width: '0%',
                                    backgroundColor: 'black', 
                                    transition: 'width 0.3s ease-in-out',
                                    marginLeft: '9px'
                                },
                                '&:hover::after': {
                                    width: '80%',
                                    marginLeft: '9px'
                                },
                            }}>
                                Get direction
                            </Button>
                        </Box>
                        <Divider sx={{ width: '80%', margin: '0 auto', mb: '20px', display: { xs: 'block', lg: 'none' } }} />
                        <Box sx={{ width: { xs: '100%', lg: '20%' }, mb: 2, borderRight: '1px solid gray', px: '80px' }}>
                            <Typography sx={{ fontSize: '30px', fontWeight: '600', color: '#0A0D31', letterSpacing: '0px' }}>Georgia</Typography>
                            <Typography sx={{ fontSize: '20px', fontWeight: '600', letterSpacing: '0px' }}>Atlanta</Typography>
                            <Typography sx={{ fontSize: '20px', fontWeight: '400', letterSpacing: '0px', color: 'gray' }}>3565 Piedmont Rd NEBuilding 2, Suite 200 Atlanta GA 30222 </Typography>
                            <Button href="tel:(404) 551-52222" sx={{
                                color: 'gray', fontSize: '20px', fontWeight: '400', marginLeft: '-8px',
                                ":hover": {
                                    color: 'blue',
                                    background: 'none'
                                }
                            }}>
                                {'(404) 551-52222'}
                            </Button>
                            <Button
                            onClick={()=>window.open(`https://www.google.com/maps/place/3565+Piedmont+Rd+NE+Building+2,+Suite+200,+Atlanta,+GA+30305,+USA/@33.8525078,-84.3817183,17z/data=!3m1!4b1!4m5!3m4!1s0x88f50fb1e1ba1fbb:0xe6492b96ce846a2a!8m2!3d33.8525078!4d-84.3795296?coh=164777&entry=tt&shorturl=1`, '_blank')}
                             sx={{
                                fontSize: '12px', textTransform: 'none', color: 'blue', fontWeight: 'bold', marginLeft: '-5px',
                                ":hover": {
                                    color: 'black',
                                    background: 'none'
                                },
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    bottom: '10px',
                                    height: '1px',
                                    width: '0%',
                                    backgroundColor: 'black', 
                                    transition: 'width 0.3s ease-in-out',
                                    marginLeft: '9px'
                                },
                                '&:hover::after': {
                                    width: '80%',
                                    marginLeft: '9px'
                                },
                            }}>
                                Get direction
                            </Button>
                        </Box>
                         <Divider sx={{ width: '80%', margin: '0 auto', mb: '20px', display: { xs: 'block', lg: 'none' } }} />
                        <Box sx={{ width: { xs: '100%', lg: '20%' }, mb: 2, paddingLeft: '80px' }}>
                            <Typography sx={{ fontSize: '30px', fontWeight: '600', color: '#0A0D31', letterSpacing: '0px' }}>Kansas</Typography>
                            <Typography sx={{ fontSize: '20px', fontWeight: '600', letterSpacing: '0px' }}>Kansas City</Typography>
                            <Typography sx={{ fontSize: '20px', fontWeight: '400', letterSpacing: '0px', color: 'gray' }}>12421 W. 151st St., Suite 100 Olathe, KS 66000</Typography>
                            <Button href="tel:(325) 221-9900" sx={{
                                color: 'gray', fontSize: '20px', fontWeight: '400', marginLeft: '-8px',
                                ":hover": {
                                    color: 'blue',
                                    background: 'none'
                                }
                            }}>
                                {'(325) 221-9900'}
                            </Button>
                            <Button 
                            onClick={()=>window.open(`https://www.google.com/maps/place/12421+W+151st+St+%23100,+Olathe,+KS+66062,+USA/@38.8548979,-94.8082158,17z/data=!3m1!4b1!4m5!3m4!1s0x87c0be797eef7223:0xff46f90ba3534df2!8m2!3d38.8548979!4d-94.8060271?q=12421+W.+151st+St.,+Suite+100+Olathe,+KS+66000&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjMsq_Dv43-AhX6QPEDHR9kAvUQ_AUoAXoECAEQAw&coh=164777&entry=tt&shorturl=1`, '_blank')}
                            sx={{
                                fontSize: '12px', textTransform: 'none', color: 'blue', fontWeight: 'bold', marginLeft: '-5px',
                                ":hover": {
                                    color: 'black',
                                    background: 'none'
                                },
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    bottom: '10px',
                                    height: '1px',
                                    width: '0%',
                                    backgroundColor: 'black', 
                                    transition: 'width 0.3s ease-in-out',
                                    marginLeft: '9px'
                                },
                                '&:hover::after': {
                                    width: '80%',
                                    marginLeft: '9px'
                                },
                            }}>
                                Get direction
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ContactPage
