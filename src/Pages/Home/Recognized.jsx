import { Box, Grid, Typography } from "@mui/material";
import Action from "../../assets/Action.webp";
import Cisco from "../../assets/Cisco.webp";
import Dell from "../../assets/Dell.webp";
import Google from "../../assets/gogle.webp";
import Patner from "../../assets/patner.webp";
import Silver from "../../assets/silver.webp";
import Tech from "../../assets/tech.webp";
import UbiQuit from "../../assets/UbiQuit.webp";
import React from "react";
const Recognized = () => {
  return (
    <>
      <Grid
        container
        sx={{ width: { xs: "100%", lg: "80%", margin: "0 auto" }, mt: 4 }}
      >
        <Grid size={{ xs: 12, lg: 6 }} sx={{ p: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              width: { xs: "100%", lg: "80%" },
            }}
          >
            <Typography
              sx={{
                backgroundColor: "#f5f5f5",
                color: "#787777",
                padding: "10px",
                width: "fit-content",
              }}
            >
              PATNERS
            </Typography>
            <Typography sx={{ fontSize: "36px", fontWeight: "bold" }}>
              Recognized by the best
            </Typography>
            <Typography sx={{ color: "#878686", fontSize: "20px" }}>
              The company needed to complete a complex migration on a tight
              deadline to avoid millions of dollars in post-contract fees and
              fines.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{width:{xs:"100%", lg:"50%"}}}
        >
            
          <Box
            sx={{
              position: "relative",
              width: { xs: 300, sm: 400, md: 450, lg: 600 },
              height: { xs: 300, sm: 400, md: 450, lg: 450 },
              margin: "auto",
            }}
          >
            {/* Center Image */}
            <Box
              component="img"
              src={Action}
              sx={{
                position: "absolute",
                width: {xs:120, lg:180},
                height: {xs:60, lg:100},
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
              }}
            />

            {/* Top */}
            <Box
              component="img"
              src={Cisco}
              sx={{
                position: "absolute",
                top: "0%",
                left: "50%",
                transform: "translate(-50%, 0%)",
                width: {xs:60, lg:80},
                height: {xs:60, lg:80},
              }}
            />

            {/* Bottom */}
            <Box
              component="img"
              src={Dell}
              sx={{
                position: "absolute",
                bottom: "0%",
                left: "50%",
                transform: "translate(0%, -10%)",
               width: {xs:90, lg:140},
                height: {xs:70, lg:80},
              }}
            />

            {/* Left */}
            <Box
              component="img"
              src={Google}
              sx={{
                position: "absolute",
                top: "50%",
                left: "0%",
                transform: "translate(0%, -50%)",
                width: {xs:70, lg:160},
                height: {xs:40, lg:60},
              }}
            />

            {/* Right */}
            <Box
              component="img"
              src={Patner}
              sx={{
                position: "absolute",
                top: "50%",
                right: "0%",
                transform: "translate(0%, -50%)",
                width: {xs:60, lg:80},
                height: {xs:60, lg:80},
              }}
            />

            {/* Top-left corner */}
            <Box
              component="img"
              src={Silver}
              sx={{
                position: "absolute",
                top: "10%",
                left: "10%",
                width: {xs:60, lg:80},
                height: {xs:60, lg:80},
              }}
            />

            {/* Top-right corner */}
            <Box
              component="img"
              src={Tech}
              sx={{
                position: "absolute",
                top: "10%",
                right: "10%",
                width: {xs:60, lg:80},
                height: {xs:60, lg:80},
              }}
            />

            {/* Bottom-left corner */}
            <Box
              component="img"
              src={UbiQuit}
              sx={{
                position: "absolute",
                bottom: "10%",
                left: "10%",
                width: {xs:60, lg:80},
                height: {xs:60, lg:80},
              }}
            />
          </Box>
         
        </Grid>
      </Grid>
    </>
  );
};
export default Recognized;
