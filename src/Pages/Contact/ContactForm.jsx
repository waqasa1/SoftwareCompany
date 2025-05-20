import React, { useState } from "react";
import {
  Grid,
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    help: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field] && field !== "message") {
        newErrors[field] = "Required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <Grid item size={{xs:12, lg:12}} sx={{
            position:{xs:"relative", lg:"absolute"},
            top:{xs:0, lg:-130},
            right:{xs:0, lg:100},
            display:"flex",
            justifyContent:"center"
            // backgroundColor:"red"
          }}>
      <Box
        sx={{
          background: "#fff",
          p: 3,
          borderRadius: 2,
          boxShadow: 3,
          marginLeft:"auto",
          // position: "relative",
          // position: "absolute",
          // top: { xs: "50px",md :"-130px", lg: "-130px", xl:"-180px" },
          // mt: { xs: 4, md: -16, lg: -16, xl: -22 },
          // left: "50%",
          // transform: {
          //   xs: "translateX(-50%)",
          //   md: "translateX(-53%)",
          //   lg: "translateX(-53%)",
          // },
          width: {xs:"100%", lg:"35%"},
          height:"auto",
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" gutterBottom>
          Contact Us
        </Typography>

        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={!!errors.firstName}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "white",
                "& fieldset": {
                  borderColor: errors.firstName ? "red" : "#c4c4c4",
                },
                "&:hover fieldset": {
                  borderColor: errors.firstName ? "red" : "#1976d2",
                },
                "&.Mui-focused fieldset": {
                  borderColor: errors.firstName ? "red" : "#1976d2",
                },
              },
            }}
          />

          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "white",
                "& fieldset": {
                  borderColor: errors.firstName ? "red" : "#c4c4c4",
                },
                "&:hover fieldset": {
                  borderColor: errors.firstName ? "red" : "#1976d2",
                },
                "&.Mui-focused fieldset": {
                  borderColor: errors.firstName ? "red" : "#1976d2",
                },
              },
            }}
          />
        </Box>

        <TextField
          fullWidth
          label="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              backgroundColor: "white",
              "& fieldset": {
                borderColor: errors.company ? "red" : "#c4c4c4",
              },
              "&:hover fieldset": {
                borderColor: errors.company ? "red" : "#1976d2",
              },
              "&.Mui-focused fieldset": {
                borderColor: errors.company ? "red" : "#1976d2",
              },
            },
          }}
        />

        <TextField
          fullWidth
          label="Company Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              backgroundColor: "white",
              "& fieldset": {
                borderColor: errors.email ? "red" : "#c4c4c4",
              },
              "&:hover fieldset": {
                borderColor: errors.email ? "red" : "#1976d2",
              },
              "&.Mui-focused fieldset": {
                borderColor: errors.email ? "red" : "#1976d2",
              },
            },
          }}
        />

        <TextField
          fullWidth
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              backgroundColor: "white",
              "& fieldset": {
                borderColor: errors.phone ? "red" : "#c4c4c4",
              },
              "&:hover fieldset": {
                borderColor: errors.phone ? "red" : "#1976d2",
              },
              "&.Mui-focused fieldset": {
                borderColor: errors.phone ? "red" : "#1976d2",
              },
            },
          }}
        />

        <TextField
          fullWidth
          select
          label="How can we help you?"
          name="help"
          value={formData.help}
          onChange={handleChange}
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              backgroundColor: "white",
              "& fieldset": {
                borderColor: errors.help ? "red" : "#c4c4c4",
              },
              "&:hover fieldset": {
                borderColor: errors.help ? "red" : "#1976d2",
              },
              "&.Mui-focused fieldset": {
                borderColor: errors.help ? "red" : "#1976d2",
              },
            },
          }}
        >
          <MenuItem value="support">Support</MenuItem>
          <MenuItem value="sales">Sales Inquiry</MenuItem>
          <MenuItem value="feedback">Feedback</MenuItem>
        </TextField>

        <TextField
          fullWidth
          multiline
          rows={4}
          label="Message (Optional)"
          name="message"
          value={formData.message}
          onChange={handleChange}
          sx={{
            mb: 4,
            "& .MuiOutlinedInput-root": {
              backgroundColor: "white",
              "& fieldset": {
                borderColor: "#c4c4c4",
              },
              "&:hover fieldset": {
                borderColor: "#1976d2",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#1976d2",
              },
            },
          }}
        />

        <Button variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </Box>
    </Grid>
  );
};

export default ContactForm;
