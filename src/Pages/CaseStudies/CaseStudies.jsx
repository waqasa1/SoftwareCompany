import React from 'react'
import { Box, Typography, Button, Divider, Rating, Card, CardMedia, CardActions, CardContent } from '@mui/material'
import insurance from '../../assets/insurance.webp'
import ness from '../../assets/ness.webp'
import undergroup from '../../assets/undergroup.webp'
import c1 from '../../assets/c1.webp'
import c2 from '../../assets/c2.webp'
import c3 from '../../assets/c3.webp'
import c4 from '../../assets/c4.webp'
import c5 from '../../assets/c5.webp'

const CaseStudies = () => {
    const cardData = [
        {
            niche:'Cloud Hosting',
            title: 'Major Insurance Provider Saves $750k per Month With Big Data Migration',
            description:
                'The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.',
            image: insurance,
            bullet1:'Modern infrastructure',
            bullet2:'Consulting services'
        },
        {
            niche:'IT Consulting',
            title: 'Maximizing Efficiency with Proper Technology Implementation – Coffee Success Story',
            description:
                'The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.',
            image: ness,
            bullet1:'Modern infrastructure',
            bullet2:'Consulting services'
        },
        {
            niche:'Mobile development',
            title: 'Strategic Move to an AI-supported application for Public Safety Travel App in London',
            description:
                'Travel confidently around London with maps and live travel updates. Our reliable journey planner will map a safe route.',
            image: undergroup,
            bullet1:'Modern infrastructure',
            bullet2:'Consulting services'
        },
        {
            niche:'App develoment',
            title: 'Convenience, savings, and rewards at your fingertips',
            description:
                'Paysafe’s fast-paced expansion had resulted in a lack of process consistency & standardisation across their acquired brands.',
            image: c1,
            bullet1:'Digital transformation',
            bullet2:'Consulting services'
        },
        {
            niche:'App develoment',
            title: 'Private trust management and trading platform',
            description:
                'The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.',
            image: c2,
            bullet1:'Modern infrastructure',
            bullet2:'Consulting services'
        },
        {
            niche:'App develoment',
            title: 'Online platform for distance learning',
            description:
                'Travel confidently around London with maps and live travel updates. Our reliable journey planner will map a safe route.',
            image: c3,
            bullet1:'Modern infrastructure',
            bullet2:'Consulting services'
        },
        {
            niche:'Digital transformation',
            title: 'Delivering enterprise-wide efficiencies at Paysafe through Intelligent Automation',
            description:
                'Paysafe’s fast-paced expansion had resulted in a lack of process consistency & standardisation across their acquired brands.',
            image: c4,
            bullet1:'Digital transformation ',
            bullet2:'International growth'
        },
        {
            niche:'IT Consulting',
            title: 'Bringing premium live casino experiences to gamers across the globe',
            description:
                'Authentic first partnered with Tecnologia January 2021, following their referral from another of our clients in the iGaming industry.',
            image: c5,
            bullet1:'Digital transformation',
            bullet2:'iGaming'
        },
        {
            niche:'Cyber Security',
            title: 'Building, optimising, and future-proofing existing infrastructures with payment gateways',
            description:
                'Core to growing a gaming company is a robust payments infrastructure.',
            image: undergroup,
            bullet1:'Cyber Security',
            bullet2:'Consulting services'
        },
    ];
    return (
        <>
            <Box sx={{ py: '20px' }}>
                <Box sx={{ width: { lg: '80%' }, margin: '0 auto' }}>
                    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <Button sx={{ color: 'gray', backgroundColor: 'rgb(245, 237, 237)', fontSize: '10px', fontWeight: '600', marginTop: '20px' }}>Case studies</Button>
                    <Typography sx={{ fontSize: { xs: '20px', lg: '48px' }, fontWeight: '700', letterSpacing: '-1px' }}>Featured case studies</Typography>
                    </Box>
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
                                    height: 'auto',
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
                                            marginLeft: '-8px',
                                            marginBottom: '10px',
                                            fontSize: '12px',
                                            color: 'rgb(168, 159, 159)',
                                            fontWeight: '600',
                                            ":hover": {
                                                color: 'blue',
                                                background: 'none',
                                            },
                                        }}
                                    >
                                        {card.niche}
                                    </Button>
                                    <Typography
                                        gutterBottom
                                        className="hover-text"
                                        variant="h5"
                                        component="div"
                                        sx={{ fontSize: '20px', fontWeight: 600, ":hover": { color: 'blue' } }}
                                    >
                                        {card.title}
                                    </Typography>

                                    <Typography variant="body2" sx={{ fontSize: '16px', marginTop: '10px' }}>
                                        {card.description}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontSize: '16px', marginTop: '10px' }}>
                                        ✔︎ {card.bullet1}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontSize: '16px', marginTop: '10px' }}>
                                        ✔︎ {card.bullet2}
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

export default CaseStudies
