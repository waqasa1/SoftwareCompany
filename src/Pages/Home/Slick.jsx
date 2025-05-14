import { Box, Grid, Typography } from "@mui/material";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import React from "react";
const Slick = () => {
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
    <Grid size={{xs:12}} sx={{display:"flex", justifyContent:"center",backgroundColor:"#242627",gap:5,}}>
        <Box
  sx={{
    boxShadow: 3, // or use '0px 4px 12px rgba(0, 0, 0, 0.2)'
    padding: '20px',
     borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
    backgroundColor: '#1a1b1c',
    display: 'flex',
    alignItems: 'center',
    gap: 2
  }}
>
  <ArrowCircleLeftIcon  sx={{color:"#f5f5e8"}}/>
  <Typography sx={{color:"#f5f5e8"}}>Your IT Challenges</Typography>
  <ArrowCircleRightIcon sx={{color:"#f5f5e8"}}/>
</Box>
    </Grid>
  <Grid size={{xs:12}}>
  <Box sx={{ height: '12px', backgroundColor: '#f5f5e8',}} />
</Grid>


</Grid>
</>
    );
}
export default Slick