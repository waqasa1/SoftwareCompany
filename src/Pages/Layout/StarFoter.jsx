import {
  Box,
  Button,
  Checkbox,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";
import { CheckBox } from "@mui/icons-material";
import footerDot from "../../assets/footer-dots.svg";
import logofooter from "../../assets/logo-footer.svg"

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
              <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {/* Solutions */}
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{ fontWeight: "bold", mb: 3, color: "white" }}
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
                    sx={{ fontWeight: "bold", mb: 3, color: "white" }}
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
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
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
    </>
  );
};
export default StarFooter;
