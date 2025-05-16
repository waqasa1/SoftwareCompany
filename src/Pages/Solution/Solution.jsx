import {
  Box,
  Typography,
  Card,
  CardActions,
  CardContent,
  Divider,
  Button,
  Grid,
} from "@mui/material";
import solution from "../../assets/solution-back.webp";
import hero from "../../assets/heroimage.webp";
import cost from "../../assets/Cost-effectiveness.svg";
import innovative from "../../assets/Innovative.svg";
import Scalability from "../../assets/Scalability.svg";
import Industry from "../../assets/Industry.svg";
import SolutionMain from "../../assets/solution-main.webp";
import React from "react";
import { useNavigate } from "react-router-dom";
function Solution() {
  const navigate = useNavigate();
  const handleResource = () =>{
    navigate('/contact')
  }
  const cardData = [
    {
      title: "Managed Services",
      description:
        "Free up your internal resources to focus on the business by letting us handle day-to-day support services.",
      image: Scalability,
    },
    {
      title: "Cloud Solutions",
      description:
        "Optimize your infrastructure with scalable and secure cloud solutions.",
      image: innovative,
    },
    {
      title: "Cybersecurity",
      description:
        "Protect your business with enterprise-grade security solutions and monitoring.",
      image: Industry,
    },
    {
      title: "Web Development",
      description:
        "Our web development services can help you establish an impactful online presence and reach your target audience effectively.",
      image: Scalability,
    },
    {
      title: "Mobile Development",
      description:
        "We can help you create a customized mobile app that aligns with your brand and goals, with expertise in various mobile platforms.",
      image: innovative,
    },
    {
      title: "Cloud Services",
      description:
        "With our expertise in cloud technologies, we can help you find the right cloud solutions that meet your business needs and goals.",
      image: Industry,
    },
  ];
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
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: 2, lg: 5 },
            width: { xs: "85%", lg: "65%" },
            alignItems: "end",
            margin: "0 auto",
            // textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Typography sx={{ fontSize: "36px", fontWeight: "bold" }}>
              Comprehensive IT services for businesses
            </Typography>
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
      <Box sx={{ backgroundColor: "#B3C9E7", py: "20px" }}>
        <Box sx={{ width: { lg: "80%" }, margin: "0 auto" }}>
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
                  padding: "10px",
                  margin: { xs: "10px", lg: "0" },
                  transition: "0.3s",
                  ":hover": {
                    boxShadow: 24,
                  },
                  "&:hover .hover-text": {
                    color: "blue",
                  },
                }}
              >
                <img
                  alt={card.title}
                  src={card.image}
                  height="80"
                  width="80"
                  style={{ paddingLeft: "20px" }}
                />

                <CardContent sx={{ minHeight: "100px" }}>
                  <Typography
                    gutterBottom
                    className="hover-text"
                    variant="h5"
                    component="div"
                    sx={{ fontSize: "24px", fontWeight: 600 }}
                  >
                    {card.title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {card.description}
                  </Typography>
                </CardContent>

                <Divider />

                <CardActions>
                  <Button
                    sx={{
                      fontSize: "12px",
                      textTransform: "none",
                      color: "blue",
                      fontWeight: "bold",
                      position: "relative",
                      ":hover": {
                        color: "black",
                        background: "none",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        bottom: "10px",
                        height: "1px",
                        width: "0%",
                        backgroundColor: "black",
                        transition: "width 0.3s ease-in-out",
                        marginLeft: "9px",
                      },
                      "&:hover::after": {
                        width: "80%",
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
      <Box sx={{ m: 5 }}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
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
                  fontSize: "32px",
                  fontWeight: "bold",
                  ":hover": {
                    color: "blue",
                    background: "none",
                  },
                }}
              >
                Why choose services from Tecnologia?
              </Typography>
              <Typography sx={{ color: "#9c9c9c" }}>
                Tecnologia services provide businesses with an edge over the
                competition with a variety of benefits. Opting for outsourced IT
                services improve the efficiency of business and build trust with
                customers and clients. Our services can be tailored to meet
                specific needs to match your specific goals.
              </Typography>
              <Button
              onClick={handleResource}
                sx={{
                  fontSize: "12px",
                  textTransform: "none",
                  backgroundColor: "#007BFF",
                  color: "black",
                  fontWeight: "600",
                  position: "relative",
                  ":hover": {
                    color: "white",
                    backgroundColor: "#0056b3",
                  },
                }}
                size="small"
                variant="contained"
                color="blue"
              >
                Get in touch
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
              src={SolutionMain}
              alt="image"
              sx={{
                height: { xs: "30vh", md: "35", lg: "50vh" },
                borderRadius: "12px",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default Solution;
