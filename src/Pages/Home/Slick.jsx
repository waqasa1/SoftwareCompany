import { Grid, Box, Typography, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import React, { useState } from "react";
const cardData = [
  {
    title: 'Major Insurance Provider Saves $750k per Month With Big Data Migration',
    description: 'The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.',
  },
  {
    title: 'Maximizing Efficiency with Proper Technology Implementation – Coffee Success Story',
    description: 'The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.',
  },
  {
    title: 'Strategic Move to an AI-supported application for Public Safety Travel App in London',
    description: 'Travel confidently around London with maps and live travel updates. Our reliable journey planner will map a safe route.',
  },
  // Add more cards as needed
  {
    title: 'Fourth Card Example',
    description: 'This is an additional card to demonstrate the carousel functionality.',
    
  },
];
const Slick = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = { xs: 1, lg: 3 }; // 1 card on mobile, 3 on desktop

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + cardsPerView.lg >= cardData.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? cardData.length - cardsPerView.lg : prevIndex - 1
    );
  };

  const getVisibleCards = () => {
    const endIndex = currentIndex + cardsPerView.lg;
    if (endIndex > cardData.length) {
      return [
        ...cardData.slice(currentIndex),
        ...cardData.slice(0, endIndex % cardData.length)
      ];
    }
    return cardData.slice(currentIndex, endIndex);
  };

    return(
<>
<Grid container sx={{backgroundColor:"#242627", display:"flex", justifyContent:"center"}}>
    <Grid size={{xs:12}} sx={{width:"80%", margin:"0 auto", backgroundColor:"#242627",display:"flex",flexDirection:"column", gap:2, m:5}}>
        <Typography sx={{color:"#dee0ff",padding:"10px",width:"fit-content", backgroundColor:"#1a1b1c", fontSize:"12px"}}>
            WHAT WE USE
        </Typography>
        <Typography sx={{color:"#dee0ff", fontSize:"40px", fontWeight:"bold"}}>
            Bringing the best IT vendors to you.
        </Typography>
        <Typography sx={{color:"#dee0ff"}}>
            Working only with the best, to ensure the quality of our services, and to bring state of the art technology to those who need it.
        </Typography>
    </Grid>
     <Grid size={{xs:12}} sx={{display:"flex", justifyContent:"center", backgroundColor:"#242627", gap:5}}>
        <Box
          sx={{
            boxShadow: 3,
            padding: '20px',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
            backgroundColor: '#1a1b1c',
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}
        >
          <ArrowCircleLeftIcon 
            sx={{color:"#f5f5e8", cursor: 'pointer'}} 
            onClick={handlePrev}
          />
          <Typography sx={{color:"#f5f5e8"}}>Your IT Challenges</Typography>
          <ArrowCircleRightIcon 
            sx={{color:"#f5f5e8", cursor: 'pointer'}} 
            onClick={handleNext}
          />
        </Box>
      </Grid>
      
      <Grid size={{xs:12}}>
        <Box sx={{ height: '10px', backgroundColor: '#1F2121'}} />
      </Grid>
      
      <Grid size={{xs:12}} sx={{width:"80%", margin:"0 auto", overflow: 'hidden',m:8}}>
        <Box sx={{ 
          display: 'flex',
          transition: 'transform 0.5s ease',
          transform: `translateX(-${currentIndex * (100/cardsPerView.lg)}%)`,
          width: `${(cardData.length / cardsPerView.lg) * 72}%`
        }}>
          {cardData.map((card, index) => (
            <Box 
              key={index} 
              sx={{ 
                flex: `0 0 ${100/cardsPerView.lg}%`,
                padding: '0 10px',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Card
                sx={{
                  width: '100%',
               
                  maxWidth: { xs: '100%', lg: '90%' },
                backgroundColor:"#1a1b1c",
                height:"auto",
                  padding: '12px',
                  margin: { xs: '10px 0', lg: '0 10px' },
                  transition: '0.3s',
                  border: '1px solid rgba(3, 1, 1, 0.7)',
                  borderRadius: '10px',
                }}
              >
                <CardContent sx={{ minHeight: '100px' }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontSize: '20px', fontWeight: 600,color:"#f5f5e8"  }}
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize:'16px', marginTop:'10px',color:"#f5f5e8"}}>
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      fontSize: '10px',
                      textTransform: 'none',
                      fontWeight: '600',
                      position: 'relative',
                      color:"#f5f5e8",
                      ":hover": {
                        color: 'white',
                        fontWeight:"bold",
                        background: 'none',
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>
      </Grid>
</Grid>
</>
    );
}
export default Slick