import React, { useState } from "react";
import { Grid, Box, TextField, Button, MenuItem, Typography } from "@mui/material";

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
    <Grid item  sx={{ backgroundColor: "#d5dbec", position: "relative", p: 2 }}>
      <Box
        sx={{
          background: "#fff",
          p: 2,
          borderRadius: 2,
          boxShadow: 3,
          position: "absolute",
        top: { xs: "50px", lg: "-130px" },
          left: "50%",
           transform: { xs: "translateX(-50%)", md: "translateX(-53%)", lg: "translateX(-53%)" },
          width: "90%",
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" gutterBottom>Contact Us</Typography>
        
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
        </Box>

        <TextField
          fullWidth
          label="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          error={!!errors.company}
          helperText={errors.company}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Company Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          select
          label="How can we help you?"
          name="help"
          value={formData.help}
          onChange={handleChange}
          error={!!errors.help}
          helperText={errors.help}
          sx={{ mb: 2 }}
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
          sx={{ mb: 2 }}
        />

        <Button variant="contained" fullWidth type="submit">Submit</Button>
      </Box>
    </Grid>
  );
};

export default ContactForm;
