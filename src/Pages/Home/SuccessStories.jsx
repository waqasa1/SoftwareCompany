import React from 'react'
import { Box, Typography, Button, Divider, Rating, Card, CardMedia, CardActions, CardContent } from '@mui/material'
import insurance from '../../assets/insurance.webp'
import ness from '../../assets/ness.webp'
import undergroup from '../../assets/undergroup.webp'
const SuccessStories = () => {
    const cardData = [
        {
            title: 'Major Insurance Provider Saves $750k per Month With Big Data Migration',
            description:
                'The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.',
            image: insurance,
        },
        {
            title: 'Maximizing Efficiency with Proper Technology Implementation – Coffee Success Story',
            description:
                'The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.',
            image: ness,
        },
        {
            title: 'Strategic Move to an AI-supported application for Public Safety Travel App in London',
            description:
                'Travel confidently around London with maps and live travel updates. Our reliable journey planner will map a safe route.',
            image: undergroup,
        },
    ];
    return (
        <>
            <Box sx={{ py: '20px' }}>
                <Box sx={{ width: { lg: '80%' }, margin: '0 auto' }}>
                    <Button sx={{ color: 'gray', backgroundColor: 'rgb(245, 237, 237)', fontSize: '10px', fontWeight: '600', marginTop: '20px' }}>Where We Do</Button>
                    <Typography sx={{ fontSize: { xs: '20px', lg: '48px' }, fontWeight: '700', letterSpacing: '-1px' }}>Success Stories</Typography>
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
                                    width: { xs: '100%', lg: '30%' },
                                    height: 'fit-content',
                                    padding: '12px',
                                    margin: { xs: '10px', lg: '0' },
                                    transition: '0.3s',
                                    border: '1px solid rgb(231, 225, 225)',
                                    borderRadius: '10px',
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={card.image}
                                    alt="green iguana"
                                    sx={{ borderRadius: '10px' }}
                                />

                                <CardContent sx={{ minHeight: '100px' }}>
                                    <Button
                                        sx={{
                                            marginLeft:'-8px',
                                            marginBottom:'10px',
                                            fontSize: '12px',
                                            color: 'rgb(168, 159, 159)',
                                            fontWeight: '600',
                                            ":hover": {
                                                color: 'blue',
                                                background: 'none',
                                            },
                                        }}
                                    >
                                        Cloud Hosting
                                    </Button>
                                    <Typography
                                        gutterBottom
                                        className="hover-text"
                                        variant="h5"
                                        component="div"
                                        sx={{ fontSize: '20px', fontWeight: 600, ":hover":{color:'blue'} }}
                                    >
                                        {card.title}
                                    </Typography>

                                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize:'16px' , marginTop:'10px'}}>
                                        {card.description}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize:'16px', marginTop:'10px'}}>
                                        ✔︎ Modern infrastructure<br/>
                                        ✔︎ Consulting services
                                    </Typography>
                                </CardContent>

                                <CardActions>
                                    <Button
                                        sx={{
                                            fontSize: '10px',
                                            textTransform: 'none',
                                            color: 'black',
                                            fontWeight: '600',
                                            position: 'relative',
                                            ":hover": {
                                                color: 'blue',
                                                background: 'none',
                                            },
                                        }}
                                    >
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        ))}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default SuccessStories
