import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Grid,
} from "@mui/material";
import b1 from "../../assets/b1.webp";
import b2 from "../../assets/b2.webp";
import b3 from "../../assets/b3.webp";
import b4 from "../../assets/b4.webp";
import b5 from "../../assets/b5.webp";
import b6 from "../../assets/b6.webp";
import b7 from "../../assets/b7.webp";
import b8 from "../../assets/b8.webp";
import b9 from "../../assets/b9.webp";
import b10 from "../../assets/b10.webp";
import blogmain from "../../assets/blog-main.webp";
import React from "react";
import Contact from "../Contact/Form";
const Blog = () => {
  const cardData = [
    {
        niche:"Cybersecurity",
      title:
        "Major Insurance Provider Saves $750k per Month With Big Data Migration",
      description:
        "The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.",
      image: b1,
    },
    {
        niche:"Cybersecurity",
      title:
        "Maximizing Efficiency with Proper Technology Implementation – Coffee Success Story",
      description:
        "The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.",
      image: b2,
    },
     {
        niche:"IT",
      title:
        "Strategic Move to an AI-supported application for Public Safety Travel App in London",
      description:
        "Travel confidently around London with maps and live travel updates. Our reliable journey planner will map a safe route.",
      image: b3,
    },
     {
        niche:"Development",
      title:
        "Strategic Move to an AI-supported application for Public Safety Travel App in London",
      description:
        "Travel confidently around London with maps and live travel updates. Our reliable journey planner will map a safe route.",
      image: b4,
    },
    {
        niche:"Development",
      title:
        "Strategic Move to an AI-supported application for Public Safety Travel App in London",
      description:
        "Travel confidently around London with maps and live travel updates. Our reliable journey planner will map a safe route.",
      image: b5,
    },
    {
        niche:"Development",
      title:
        "Strategic Move to an AI-supported application for Public Safety Travel App in London",
      description:
        "Travel confidently around London with maps and live travel updates. Our reliable journey planner will map a safe route.",
      image: b6,
    },
    {
        niche:"Development",
      title:
        "Strategic Move to an AI-supported application for Public Safety Travel App in London",
      description:
        "Travel confidently around London with maps and live travel updates. Our reliable journey planner will map a safe route.",
      image: b7,
    },
    {
        niche:"Development",
      title:
        "Strategic Move to an AI-supported application for Public Safety Travel App in London",
      description:
        "Travel confidently around London with maps and live travel updates. Our reliable journey planner will map a safe route.",
      image: b8,
    },
    {
        niche:"Development",
      title:
        "Strategic Move to an AI-supported application for Public Safety Travel App in London",
      description:
        "Travel confidently around London with maps and live travel updates. Our reliable journey planner will map a safe route.",
      image: b9,
    },
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          m: 3,
          gap: 2,
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
          BLOG
        </Typography>
        <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>
          The ThinkOWebsite Blog
        </Typography>
        <Typography sx={{ color: "#9c9c9c" }}>
          Our official blog with news, technology advice, and business culture.
        </Typography>
      </Box>
      <Box sx={{ m: 5 }}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
            width: { xs: "100", lg: "80%" },
            margin: "0 auto",
            p: 5,
            alignItems: "center",
            borderRadius: "12px",
          }}
        >
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "",
                alignItems: "start",
                flexDirection: "column",
                gap: 4,
                width: { xs: "90%", lg: "90%" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "20px", lg: "32px" },
                  fontWeight: "bold",
                  ":hover": {
                    color: "blue",
                    background: "none",
                  },
                }}
              >
                How startups are cutting cloud costs, renegotiating deals with
                service providers
              </Typography>
              <Typography sx={{ color: "#9c9c9c" }}>
                As global macroeconomic conditions worsen and funding slowdown
                continues, Indian startups are cutting their spends on an
                integral part of tech businesses.
              </Typography>
              <Button
                sx={{
                  fontSize: "12px",
                  textTransform: "none",
                  color: "black",
                  fontWeight: "600",
                  position: "relative",
                  ":hover": {
                    color: "blue",
                    background: "none",
                  },
                }}
              >
                Read full story
              </Button>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, lg: 6 }}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={blogmain}
              alt="image"
              sx={{
                height: { xs: "20vh", lg: "45vh" },
                borderRadius: "12px",
              }}
            />
          </Grid>
        </Grid>
      </Box>

       <Box sx={{ py: '20px' }}>
                      <Box sx={{ width: { lg: '80%' }, margin: '0 auto' }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          mt: 4,
        }}
      >
        {cardData.map((card, index) => (
          <Card
            key={index}
            sx={{
              width: { xs: "100%", lg: "30%" },
              height: "auto",
              padding: "12px",
              margin: { xs: "10px", lg: "0" },
              transition: "0.3s",
              border: "1px solid rgb(231, 225, 225)",
              borderRadius: "10px",
            }}
          >
            <CardMedia
              component="img"
            //   height="200"
            height="auto"
              image={card.image}
              alt="green iguana"
              sx={{ borderRadius: "10px" }}
            />

            <CardContent sx={{ minHeight: "100px" }}>
              <Button
                sx={{
                  marginLeft: "-8px",
                  marginBottom: "10px",
                  fontSize: "12px",
                  color: "rgb(168, 159, 159)",
                  fontWeight: "600",
                  ":hover": {
                    color: "blue",
                    background: "none",
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
                sx={{
                  fontSize: "20px",
                  fontWeight: 600,
                  ":hover": { color: "blue" },
                }}
              >
                {card.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontSize: "16px",
                  marginTop: "10px",
                }}
              >
                {card.description}
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                sx={{
                  fontSize: "10px",
                  textTransform: "none",
                  color: "black",
                  fontWeight: "600",
                  position: "relative",
                  ":hover": {
                    color: "blue",
                    background: "none",
                  },
                }}
              >
                Read More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
      </Box>
      </Box>
      <Contact />
    </>
  );
};
export default Blog;
