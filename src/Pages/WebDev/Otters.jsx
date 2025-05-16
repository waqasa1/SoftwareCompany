import React from "react";
import Slider from "react-slick";
import {
  Grid,
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Divider,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ahsan from "../../assets/Ahsan-1.jpg";
import Arshad from "../../assets/Arshad-1.jpg";
import Sameen from "../../assets/Sameen-1.jpg";
import Shazaib from "../../assets/shahzaib-1.webp";
import Social from "../../assets/social-1.jpg";
import facbaook from "../../assets/facebook-cricle.webp";
import instagram from "../../assets/instagram.webp";
import linkdein from "../../assets/linkedin-cir.webp";
import x from "../../assets/X.webp";
import youtube from "../../assets/youtube-1.webp";
import Gpt from "../../assets/gptvs.jpg";
import Cat from "../../assets/otters-cat.jpg";
function Otters() {
  const images1 = [Ahsan, Arshad, Sameen, Shazaib, Social, Ahsan];
  const images2 = [Sameen, Shazaib, Social, Arshad, Sameen, Ahsan];

  const socialApp = [facbaook, instagram, linkdein, x, youtube];
  const sliderSettingsLTR = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
     speed: 500, 
  cssEase: "ease-in-out",
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderSettingsRTL = {
    ...sliderSettingsLTR,
    rtl: true, // Right to left for second slider
  };
  return (
    <>
      <Box sx={{ m: 5 }}>
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            width: { xs: "100%", lg: "80%" },
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
              mt: 4,
            }}
          >
            {/* Card 1 - Cloud Hosting */}
            <Card
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
                height="200"
                image={Gpt}
                alt="Insurance case study"
                sx={{ borderRadius: "10px" }}
              />

              <CardContent sx={{}}>
                <Typography
                  gutterBottom
                  className="hover-text"
                  variant="h5"
                  component="div"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold", // or 600
                    textDecoration: "underline",
                    ":hover": { color: "blue" },
                  }}
                >
                  ChatGPT vs DeepSeek: Which AI is Right for Your Business in
                  2025?
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
              <Divider />
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Typography>April 23, 2025</Typography>
                <Typography sx={{ fontWeight: "bold", color: "#888" }}>
                  •
                </Typography>
                <Typography>No Comments</Typography>
              </Box>
            </Card>

            {/* Card 2 - IT Consulting */}
            <Card
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
                height="200"
                image={Cat} // Make sure to import this image
                alt="Coffee success story"
                sx={{ borderRadius: "10px" }}
              />

              <CardContent sx={{}}>
                <Typography
                  gutterBottom
                  className="hover-text"
                  variant="h5"
                  component="div"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold", // or 600
                    textDecoration: "underline",
                    ":hover": { color: "blue" },
                  }}
                >
                  Digital Otters Joins the Meta Marketing Pro Program 2025
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
              <Divider />
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Typography>April 23, 2025</Typography>
                <Typography sx={{ fontWeight: "bold", color: "#888" }}>
                  •
                </Typography>
                <Typography>No Comments</Typography>
              </Box>
            </Card>

            {/* Card 3 - Mobile development */}
            <Card
              sx={{
                width: { xs: "100%", lg: "30%" },
                height: "auto",
                padding: "12px",
                margin: { xs: "10px", lg: "0" },
                transition: "0.3s",
                border: "1px solid rgb(231, 225, 225)",
                borderRadius: "10px",
                gap: 4,
              }}
            >
              <CardContent sx={{}}>
                <Typography
                  gutterBottom
                  className="hover-text"
                  variant="h5"
                  component="div"
                  sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                    minHeight: "50px",
                    ":hover": { color: "blue" },
                  }}
                >
                  Learn With Us About Web Development
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ fontSize: "16px", minHeight: "100px" }}
                >
                  Web development has been quite interesting and questionable
                  with the complexities and multiple fronts to explore. To learn
                  more about web development visit our blog and the latest
                  updates regarding website developments, tech stacks, and more.
                  If you have any more questions, contact us.
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  sx={{
                    position: "relative",
                  }}
                  variant="contained"
                >
                  Get a free quote
                </Button>
              </CardActions>
            </Card>
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
                justifyContent: "center",
                alignItems: "start",
                flexDirection: "column",
                gap: 1,
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
                Are you ready to work with Digital Otters?
              </Typography>
              <Typography sx={{ color: "#9c9c9c" }}>
                Let's collaborate to elevate your business, expanding the reach
                of your products, services, and innovations to new markets,
                customers, and users.
              </Typography>
              <Button
                variant="contained"
                sx={{ maxHeight: "30px", textTransform: "none" }}
              >
                Get a free quote
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 1,
              alignItems: "center",
              width: { xs: "100%", lg: "50%" },
              mt: { xs: 2, lg: 0 },
            }}
          >
            {/* Slider 1 - Left to Right */}
            <Slider {...sliderSettingsLTR} style={{ width: "100%" }}>
              {images1.map((src, i) => (
                <Box key={i} className="slick-img-box">
                  <Box
                    key={i}
                    component="img"
                    src={src}
                    alt={`slider1-img-${i}`}
                    sx={{
                      width: "100%",
                      height: { xs: "180px", md: "180px", lg: "150px" },
                      objectFit: "cover",
                      borderRadius: "12px",
                      px: 0,
                    }}
                  />
                </Box>
              ))}
            </Slider>

            {/* Slider 2 - Right to Left */}
            <Slider {...sliderSettingsRTL} style={{ width: "100%" }}>
              {images2.map((src, i) => (
                <Box key={i} className="slick-img-box">
                  <Box
                    key={i}
                    component="img"
                    src={src}
                    alt={`slider2-img-${i}`}
                    sx={{
                      width: "100%",
                      height: { xs: "180px", md: "150px", lg: "150px" },
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />
                </Box>
              ))}
            </Slider>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center" }}
        className="socail-app"
      >
        {socialApp.map((pics, i) => (
          <Box
            component="img"
            src={pics}
            alt="images"
            sx={{
              height: { xs: "8vh", lg: "20vh" },
              width: { xs: "60px", lg: "200px" },
            }}
          />
        ))}
      </Box>
    </>
  );
}
export default Otters;
