import React from "react";
import Slider from "react-slick";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardData = [
  {
    title: "Major Insurance Provider Saves $750k per Month With Big Data Migration",
    description:
      "The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.",
  },
  {
    title: "Maximizing Efficiency with Proper Technology Implementation – Coffee Success Story",
    description:
      "The company needed to complete a complex migration on a tight deadline to avoid millions of dollars in post-contract fees and fines.",
  },
  {
    title: "Strategic Move to an AI-supported application for Public Safety Travel App in London",
    description:
      "Travel confidently around London with maps and live travel updates. Our reliable journey planner will map a safe route.",
  },
  {
    title: "Fourth Card Example",
    description:
      "This is an additional card to demonstrate the carousel functionality.",
  },
];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <ArrowCircleRightIcon
      onClick={onClick}
      sx={{
        color: "#f5f5e8",
        cursor: "pointer",
        fontSize: "2rem",
        position: "absolute",
        right: "-40px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
      }}
    />
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <ArrowCircleLeftIcon
      onClick={onClick}
      sx={{
        color: "#f5f5e8",
        cursor: "pointer",
        fontSize: "2rem",
        position: "absolute",
        left: "-40px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
      }}
    />
  );
};

const Slick = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ backgroundColor: "#242627", padding: "40px 0" }}>
      <Box sx={{ width: "80%", margin: "0 auto", textAlign: "center" }}>
        <Typography
          sx={{
            color: "#dee0ff",
            padding: "10px",
            backgroundColor: "#1a1b1c",
            fontSize: "12px",
            display: "inline-block",
            marginBottom: "10px",
          }}
        >
          WHAT WE USE
        </Typography>
        <Typography
          sx={{ color: "#dee0ff", fontSize: "40px", fontWeight: "bold" }}
        >
          Bringing the best IT vendors to you.
        </Typography>
        <Typography sx={{ color: "#dee0ff", marginBottom: "30px" }}>
          Working only with the best, to ensure the quality of our services, and
          to bring state of the art technology to those who need it.
        </Typography>
      </Box>
      <Box sx={{ position: "relative", width: "80%", margin: "0 auto" }}>
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <Box key={index} sx={{ padding: "0 10px" }}>
              <Card
                sx={{
                  backgroundColor: "#1a1b1c",
                  border: "1px solid rgba(3, 1, 1, 0.7)",
                  borderRadius: "10px",
                  padding: "20px",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#f5f5e8" }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    sx={{ mt: 1, fontSize: "14px", color: "#f5f5e8" }}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      fontSize: "10px",
                      textTransform: "none",
                      fontWeight: "600",
                      color: "#f5f5e8",
                      ":hover": {
                        color: "white",
                        fontWeight: "bold",
                        background: "none",
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Slick;
