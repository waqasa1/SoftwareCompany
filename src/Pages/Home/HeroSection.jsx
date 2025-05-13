import React from 'react'
import { Box, Typography, Button, Divider, Rating, Card, CardMedia, CardActions, CardContent } from '@mui/material'
import hero from '../../assets/heroimage.webp'
import cost from '../../assets/Cost-effectiveness.svg'
import innovative from '../../assets/Innovative.svg'
import Scalability from '../../assets/Scalability.svg'
import Industry from '../../assets/Industry.svg'


const HeroSection = () => {
      const cardData = [
    {
      title: 'Managed Services',
      description:
        'Free up your internal resources to focus on the business by letting us handle day-to-day support services.',
      image: Scalability,
    },
    {
      title: 'Cloud Solutions',
      description:
        'Optimize your infrastructure with scalable and secure cloud solutions.',
      image: innovative,
    },
    {
      title: 'Cybersecurity',
      description:
        'Protect your business with enterprise-grade security solutions and monitoring.',
      image: Industry,
    },
      {
      title: 'Web Development',
      description:
        'Our web development services can help you establish an impactful online presence and reach your target audience effectively.',
      image: Scalability,
    },
    {
      title: 'Mobile Development',
      description:
        'We can help you create a customized mobile app that aligns with your brand and goals, with expertise in various mobile platforms.',
      image: innovative,
    },
    {
      title: 'Cloud Services',
      description:
        'With our expertise in cloud technologies, we can help you find the right cloud solutions that meet your business needs and goals.',
      image: Industry,
    },
  ];
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, width: { lg: '80%' }, margin: '20px auto', px: '50px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', my: 'auto' }}>
                    <Typography sx={{ fontSize: { xs: '1.2rem', lg: '3.5rem' }, lineHeight: '1em', letterSpacing: '-1px', marginBottom: '20px', fontWeight: '600', }}>We manage your IT, so you can manage your business.</Typography>
                    <Typography sx={{ fontSize: { xs: '1rem', lg: '2rem' } }}>Take charge of your business continuity with innovative IT solutions</Typography>
                    <Box sx={{ marginTop: '10px' }} >
                        <Button variant="contained" sx={{ marginRight: '20px', marginBottom: { xs: '5px', lg: '0px' }, textTransform: 'none' }}>Schedule a Free Consultation</Button>
                        <Button variant="contained" sx={{ textTransform: 'none' }}>Services</Button>
                    </Box>
                </Box>

                <Box sx={{ marginTop: { xs: '15px' }, display: 'flex', justifyContent: 'end' }}><Box component='img' src={hero} height={500} width={800} sx={{ clipPath: 'polygon(27% 0, 100% 0, 100% 20%, 100% 100%, 80% 100%, 20% 100%, 1% 100%, 28% 52%)', height: { xs: '200px', lg: '400px' }, width: { xs: '300px', lg: '700px' } }} /></Box>
            </Box>
            <Divider sx={{ py: '20px', width: '80%', margin: '0 auto', mb: '20px' }} />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', width: { lg: '80%' }, margin: '0 auto', justifyContent: 'center', paddingLeft: '10px', marginBottom: '50px' }}>
                <Box sx={{ width: { xs: '100%', lg: '20%' }, mb: 2 }}>
                    <Box>Reviewed on<Rating name="read-only" value={5} readOnly sx={{ color: 'red', marginLeft: '10px' }} size="small" /></Box>
                    <Box> <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/clutch-logo.svg" alt="logo" style={{ maxWidth: '80px', marginRight: '10px' }} />31 reviews</Box>
                </Box>
                <Divider sx={{ width: '80%', margin: '0 auto', mb: '20px', display: { xs: 'block', lg: 'none' } }} />
                <Box sx={{ width: { xs: '50%', lg: '20%' }, mb: 2 }}>
                    <Typography sx={{ borderLeft: '2px solid gray', paddingLeft: '10px', fontWeight: '700', fontSize: '20px' }}> 20 Years</Typography>
                    <Typography sx={{ paddingLeft: '10px' }}> Proven Track Record</Typography>
                </Box>
                <Box sx={{ width: { xs: '50%', lg: '20%' }, mb: 2 }}>
                    <Typography sx={{ borderLeft: '2px solid gray', paddingLeft: '10px', fontWeight: '700', fontSize: '20px' }}>98%</Typography>
                    <Typography sx={{ paddingLeft: '10px' }}>Customer Satisfaction</Typography>
                </Box>
                <Box sx={{ width: { xs: '50%', lg: '20%' }, mb: 2 }}>
                    <Typography sx={{ borderLeft: '2px solid gray', paddingLeft: '10px', fontWeight: '700', fontSize: '20px' }}>1,500 Projects</Typography>
                    <Typography sx={{ paddingLeft: '10px' }}>We Have Completed</Typography>
                </Box>
                <Box sx={{ width: { xs: '50%', lg: '20%' }, mb: 2 }}>
                    <Typography sx={{ borderLeft: '2px solid gray', paddingLeft: '10px', fontWeight: '700', fontSize: '20px' }}>3 Mins</Typography>
                    <Typography sx={{ paddingLeft: '10px' }}>Average Answer Time</Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: '20px', width: { lg: '80%' }, margin: '0 auto', height: '250px', backgroundColor: '#242627', borderRadius: { xs: '0', md: '5px' }, justifyContent: 'space-between', overflow: 'hidden', px: '20px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', width: '50%' }}>
                    <Button sx={{ color: '#DEE0FF', backgroundColor: '#00000026', fontSize: '10px', fontWeight: '600', marginTop: '20px' }}>What We Do</Button>
                    <Typography sx={{ color: '#DEE0FF', fontSize: { xs: '20px', lg: '48px' }, fontWeight: '700', marginTop: '60px' }}>Simplifying IT for a complex world.</Typography>
                </Box>
                <Box >
                    <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Shape-dots-arrow-right.svg" alt="Tilted image" style={{ transform: 'rotate(-90deg)', height: '220px', marginTop: '10px' }} />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, width: { lg: '80%' }, margin: '0 auto', justifyContent: 'space-between', marginTop: '20px' }}>
                <Box sx={{ padding: '10px' }}>
                    <img src={cost} alt="" />
                    <Typography sx={{ color: '#0A0D31', fontSize: '20px', fontWeight: '700' }}>Cost-effectiveness</Typography>
                    <Typography sx={{ fontSize: '12px', color: '#5F6567' }}>We offer affordable IT solutions that help you reduce costs and improve your bottom line.</Typography>
                </Box>
                <Divider sx={{ width: '80%', margin: '0 auto', mb: '20px', display: { xs: 'block', lg: 'none' } }} />
                <Box sx={{ padding: '10px' }}>
                    <img src={innovative} alt="" />
                    <Typography sx={{ color: '#0A0D31', fontSize: '20px', fontWeight: '700' }}>Innovative Technology</Typography>
                    <Typography sx={{ fontSize: '12px', color: '#5F6567' }}>We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition.</Typography>
                </Box>
                <Divider sx={{ width: '80%', margin: '0 auto', mb: '20px', display: { xs: 'block', lg: 'none' } }} />
                <Box sx={{ padding: '10px' }}>
                    <img src={Industry} alt="" />
                    <Typography sx={{ color: '#0A0D31', fontSize: '20px', fontWeight: '700' }}>Industry Expertise</Typography>
                    <Typography sx={{ fontSize: '12px', color: '#5F6567' }}>We specialize in serving specific industries, such as healthcare, finance, or manufacturing, and offer tailored solutions that meet your unique needs.</Typography>
                </Box>
                <Divider sx={{ width: '80%', margin: '0 auto', mb: '20px', display: { xs: 'block', lg: 'none' } }} />
                <Box sx={{ padding: '10px' }}>
                    <img src={Scalability} alt="" />
                    <Typography sx={{ color: '#0A0D31', fontSize: '20px', fontWeight: '700' }}>Scalability</Typography>
                    <Typography sx={{ fontSize: '12px', color: '#5F6567' }}>Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment.</Typography>
                </Box>
            </Box>
            <Divider sx={{ width: '80%', margin: '0 auto', mb: '20px', py: '20px' }} />
            <Box sx={{ width: { lg: '80%' }, margin: '0 auto' }}>
                <Button sx={{
                    fontSize: '12px', textTransform: 'none', color: 'blue', fontWeight: 'bold',
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
                        backgroundColor: 'black', // MUI primary color or custom
                        transition: 'width 0.3s ease-in-out',
                        marginLeft: '9px'
                    },
                    '&:hover::after': {
                        width: '80%',
                        marginLeft: '9px'
                    },
                }}>
                    About Rocco
                </Button>
            </Box>
            <Box sx={{ backgroundColor: '#B3C9E7', py: '20px' }}>
                <Box sx={{ width: { lg: '80%' }, margin: '0 auto' }}>
                    <Button sx={{ color: 'gray', backgroundColor: 'white', fontSize: '10px', fontWeight: '600', marginTop: '20px' }}>How We Do</Button>
                    <Typography sx={{ fontSize: '48px', fontWeight: '700', letterSpacing: '-1px' }}>Solutions</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: 2,
                            mt: 4,
                        }}
                    >
                        {cardData.map((card, index) => (
                            <Card
                                key={index}
                                sx={{
                                    width: { xs: '100%', sm: '45%', md: '30%' },
                                    padding: '10px',
                                    transition: '0.3s',
                                    ":hover": {
                                        boxShadow: 24,
                                    },
                                    '&:hover .hover-text': {
                                        color: 'blue',
                                    },
                                }}
                            >
                                <img
                                    alt={card.title}
                                    src={card.image}
                                    height="80"
                                    width="80"
                                    style={{ paddingLeft: '20px' }}
                                />

                                <CardContent  sx={{ minHeight: '100px' }}>
                                    <Typography
                                        gutterBottom
                                        className="hover-text"
                                        variant="h5"
                                        component="div"
                                        sx={{ fontSize: '24px', fontWeight: 600 }}
                                    >
                                        {card.title}
                                    </Typography>

                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {card.description}
                                    </Typography>
                                </CardContent>

                                <Divider />

                                <CardActions>
                                    <Button
                                        sx={{
                                            fontSize: '12px',
                                            textTransform: 'none',
                                            color: 'blue',
                                            fontWeight: 'bold',
                                            position: 'relative',
                                            ":hover": {
                                                color: 'black',
                                                background: 'none',
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
                                                marginLeft: '9px',
                                            },
                                            '&:hover::after': {
                                                width: '80%',
                                            },
                                        }}
                                    >
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        ))}
                    </Box>
                    <Box sx={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
                        <Button variant='contained'>View All Solutions</Button>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default HeroSection
