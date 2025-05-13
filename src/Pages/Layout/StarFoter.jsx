import {
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";
import { CheckBox } from "@mui/icons-material";
import footerDot from "../../assets/footer-dots.svg";
import logofooter from "../../assets/logo-footer.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const StarFooter = () => {
  const SolutionItems = [
    "Manged Services",
    "IT Consulting & Advisory",
    "Cyber Security",
    "Web Development",
    "Mobile Development",
    "Cloud Services",
    "Network Connectivity",
    "ERP Solutions",
  ];
  const CompanyItems = [
    "About us",
    "Why us",
    "Team",
    "Careers",
    "Partners & Certifications",
    "Blog",
    "Case Studies",
    "FAQ",
  ];
  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          py: 4,
        }}
      >
        <Grid
          size={{ xs: 12 }}
          sx={{
            width: { xs: "100%", lg: "80%" },
          }}
        >
          <Grid container spacing={1}>
            {/* Left Side */}
            <Grid
              size={{ xs: 12, lg: 6 }}
              sx={{
                p: 2,
                mb: 0,
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {/* Solutions */}
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{ fontWeight: "bold", mb: 2, color: "white" }}
                  >
                    Solutions
                  </Typography>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: 2,
                      width: { xs: "100%", lg: "90%" },
                      color: "whitesmoke",
                    }}
                  >
                    {SolutionItems.slice(0, 9).map((item, index) => (
                      <Box
                        key={index}
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <Typography variant="body2">{item}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
                {/* comapany */}
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{ fontWeight: "bold", mb: 2, color: "white" }}
                  >
                    Our Features:
                  </Typography>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: 2,
                      width: { xs: "100%", lg: "90%" },
                      color: "whitesmoke",
                    }}
                  >
                    {CompanyItems.slice(0, 10).map((item, index) => (
                      <Box
                        key={index}
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <Typography variant="body2">{item}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
                {/* Agree field */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: { xs: "100%", lg: "75%" },
                    backgroundColor: "black",
                    color: "white",
                    gap: 1,
                  }}
                >
                  {/* Email Field */}
                  <TextField
                    size="medium"
                    label="Email"
                    variant="outlined"
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    InputProps={{
                      style: { color: "white" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "white",
                        },
                      },
                    }}
                  />

                  {/* Checkbox and Agreement Text in one line */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox sx={{ color: "white" }} />
                    <Typography variant="body2">
                      I agree to the Privacy Policy and give my permission to
                      process my personal data for the purposes specified in the
                      Privacy Policy.
                    </Typography>
                  </Box>
                  {/* Submit Button */}
                  <Button
                    variant="contained"
                    sx={{
                      width: "fit-content",
                      mt: 1,
                    }}
                  >
                    Send
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Right Side */}
            <Grid
              size={{ xs: 12, lg: 6 }}
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Relative container to layer the images */}
              <Box sx={{ position: "relative", display: "inline-block" }}>
                {/* Background Image */}
                <Box
                  component="img"
                  src={footerDot}
                  sx={{
                    height: { xs: "30vh", lg: "80%" },
                    display: "block",
                  }}
                />
                {/* Centered Overlay Image */}
                <Box
                  component="img"
                  src={logofooter}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -70%)",
                    height: { xs: "8vh", lg: "10vh" },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider
        sx={{ py: "20px", width: "80%", margin: "0 auto", mb: "20px" }}
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: { lg: "80%" },
          margin: "0 auto",
          justifyContent: "center",
          paddingLeft: "10px",
          marginBottom: "20px",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: { xs: "100%", lg: "20%" }, mb: 2 }}>
          <Box>
            Reviewed on
            <Rating
              name="read-only"
              value={5}
              readOnly
              sx={{ color: "red", marginLeft: "10px" }}
              size="small"
            />
          </Box>
          <Box>
            {" "}
            <img
              src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/clutch-logo.svg"
              alt="logo"
              style={{ maxWidth: "80px", marginRight: "10px" }}
            />
            31 reviews
          </Box>
        </Box>
        <Box sx={{ width: { xs: "50%", lg: "20%" }, mb: 2 }}>
          <Typography
            sx={{
              borderLeft: "2px solid lightgray",
              paddingLeft: "10px",
              fontWeight: "400",
              fontSize: "14px",
            }}
          >
            {" "}
            Seventh Ave, 20th Floor{" "}
          </Typography>
          <Typography sx={{ paddingLeft: "10px" }}>
            {" "}
            New York, NY 10018
          </Typography>
        </Box>
        <Box sx={{ width: { xs: "50%", lg: "20%" }, mb: 2 }}>
          <Typography
            sx={{
              borderLeft: "2px solid lightgray",
              paddingLeft: "10px",
              mfontWeight: "400",
              fontSize: "14px",
            }}
          >
            T: 1-800-356-8933
          </Typography>
          <Typography sx={{ paddingLeft: "10px" }}>
            E: office@tecnologia.com
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "50%", lg: "40%" },
            mb: 2,
            display: "flex",
            justifyContent: "center",
            gap: { xs: 2, lg: 8 },
          }}
        >
            <Box 
    textAlign="center" 
    sx={{ 
      '&:hover svg': { color: '#0A66C2' }, // LinkedIn blue
      '&:hover p': { color: '#0A66C2' },
      transition: 'all 0.3s ease'
    }}
  >
    <LinkedInIcon  />
    <Typography>LinkedIn</Typography>
  </Box>

  {/* YouTube */}
  <Box 
    textAlign="center"
    sx={{
      '&:hover svg': { color: '#FF0000' }, // YouTube red
      '&:hover p': { color: '#FF0000' },
      transition: 'all 0.3s ease'
    }}
  >
    <YouTubeIcon />
    <Typography>YouTube</Typography>
  </Box>

  {/* Facebook */}
  <Box 
    textAlign="center"
    sx={{
      '&:hover svg': { color: '#1877F2' }, // Facebook blue
      '&:hover p': { color: '#1877F2' },
      transition: 'all 0.3s ease'
    }}
  >
    <FacebookIcon />
    <Typography>Facebook</Typography>
  </Box>

  {/* GitHub */}
  <Box 
    textAlign="center"
    sx={{
      '&:hover svg': { color: '#181717' }, // GitHub black
      '&:hover p': { color: '#181717' },
      transition: 'all 0.3s ease'
    }}
  >
    <GitHubIcon />
    <Typography>GitHub</Typography>
  </Box>
          
        </Box>
        <Box sx={{ display: "flex", gap: 4, mt: 4 }}>
          <Typography>© 2025 VamTam. All rights reserved.</Typography>
          <Typography>Terms & Conditions</Typography>
          <Typography>Privacy Policy</Typography>
        </Box>
      </Box>
    </>
  );
};
export default StarFooter;
