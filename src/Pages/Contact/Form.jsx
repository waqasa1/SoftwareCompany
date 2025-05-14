import { Box, Grid, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";
import ContactForm from "./ContactForm";
import StarFooter from "../Layout/StarFoter";

function Contact() {
  const listItems = [
    "Free Consultation",
    "24/7 Support",
    "Custom Solutions",
    "Expert Team",
    "Affordable Pricing",
    "Fast Delivery",
  ];
  const options = ["1 We Schedule a call at your convenience ", "2 We do a discovery and consulting meting ", "3 We prepare a proposal "];
  return (
    <>
    <div style={{margin:"40px 0px"}}>
      <Grid
        container
        sx={{ width: { xs: "100%", lg: "80%" }, margin: "0 auto",  }}
      >
        <Grid
          size={{ xs: 12, lg: 6.5 }}
          sx={{
            height: { xs: "auto", lg: "auto" },
            backgroundColor: "#242627",
            padding: "15px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Typography
              sx={{
                color: "whitesmoke",
                backgroundColor: "black",
                padding: "5px",
                width: "fit-content",
              }}
            >
              Contact Us
            </Typography>
            <Typography
              sx={{
                color: "whitesmoke",
                width: { xs: "80%", lg: "50%" },
                fontSize: "26px",
                fontWeight: "bold",
              }}
            >
              Partner with Us for Comprehensive IT
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, lg: 5.5 }} sx={{ backgroundColor: "#242627" }}>
            {/* <ContactForm /> */}
        </Grid>
        <Grid
          size={{ xs: 12, lg: 6.5 }}
          sx={{ backgroundColor: "#d5dbec", padding: "15px" }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <Typography sx={{ width: { xs: "100%", lg: "90%" } }}>
              We’re happy to answer any questions you may have and help you
              determine which of our services best fit your needs.
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              Call us at: 1-800-356-8933
            </Typography>
            {/* List Heading */}
            <Box sx={{width:{xs:"100%",lg:"55%"}}}>
            <Typography sx={{ fontWeight: "bold", mb: 1, ml: 0.5 }}>
              Our Features:
            </Typography>

            {/* List Items in Grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)", // 3 columns per row
                gap: 2,
                width: {xs:"100%", lg:"90%"},
              }}
            >
              {listItems.slice(0, 6).map(
                (
                  item,
                  index // Only show 6 items for 2 rows
                ) => (
                  <Box
                    key={index}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <CheckCircleIcon
                      sx={{ color: "green", fontSize: 20, mr: 1 }}
                    />
                    <Typography variant="body2">{item}</Typography>
                  </Box>
                )
              )}
            </Box>
            </Box>
            <Box
      sx={{
        display: "flex",
        flexDirection:{xs:"column", lg:"row"},
        justifyContent: "space-between", 
        alignItems: "center",
        width: "100%",
      }}
    >
      {options.map((text, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection:{xs:"column", lg:"row"},
            alignItems: "center",
            gap: 1,
            padding: "8px 8px",
            flex: 1,
            marginBottom: "6vh"
          }}
        >
          <Typography variant="body1" sx={{ flexGrow: 1, fontSize:"12px"}}>
            {text}
          </Typography>
          <ArrowForwardIosIcon fontSize="large" />
        </Box>
      ))}
    </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, lg: 5.5 }} sx={{ backgroundColor: {lg:"#d5dbec"}}}>
          <ContactForm />
        </Grid>
      </Grid>
      </div>
    </>
  );
}
export default Contact;
