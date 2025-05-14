import { Box, Typography } from "@mui/material";
import solution from "../../assets/solution-back.webp";
import React from "react";
function Solution() {
  return (
    <>
      <Box sx={{ m: 3 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
            width: { xs: "95%", lg: "45%" },
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              padding: "10px",
              width: "fit-content",
              backgroundColor: "#f5f5f5",
              color: "#9c9c9c",
            }}
          >
            SOLUTIONS
          </Typography>
          <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>
            Services & Solutions
          </Typography>
          <Box sx={{}}>
            <Typography sx={{ color: "#9c9c9c" }}>
              Take your company to new heights by investing in our reliable and
              efficient technology solutions.
            </Typography>
          </Box>

          <Box
            component="img"
            src={solution}
            alt="image"
            sx={{ width: { xs: "80vw", md: "80vw" } }}
          />
          <Box sx={{ p: 4 }}>
            <Typography>
              Tecnologia is your trusted partner for IT management, data
              security, and cloud technology with one goal in mind: to transform
              the way your business works in order to save you time and money.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            p: 1,
            display: "flex",
            flexDirection:{xs:"column", lg:"row"},
            gap:{xs:2, lg:5},
            width: { xs: "85%", lg: "65%" },
            display: "flex",
            alignItems: "end",
            margin: "0 auto",
            // textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{display:"flex", flexDirection:"column", gap:4}} >
            <Typography sx={{fontSize:"36px",fontWeight:"bold"}}>Comprehensive IT services for businesses</Typography>
            <Typography>
              When we say comprehensive, we mean comprehensive. Tecnologia has
              the experience and expertise to provide an excellent experience
              across spheres, for truly holistic IT.
            </Typography>
          </Box>
          <Typography>
            Some MSPs struggle to offer consulting or network services. But your
            organization needs the entire experience to stop worrying about IT.
            Learn more about our services below.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
export default Solution;
