import React from "react";
import pic1 from "../images/pic1.jpg";
import { Box, Link, Paper, Stack, Typography } from "@mui/material";
import {
  LanguageSharp,
  LocalPhone,
  LocationCity,
  LocationOnSharp,
} from "@mui/icons-material";

const Contact = () => {
  return (
    <Box
      style={{
        backgroundImage: `url(${pic1})`,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        gap={4}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography
          component={Paper}
          elevation={24}
          variant="h4"
          sx={{
            minWidth: "10em",
            fontFamily: ' "Castoro Titling", cursive;',
            mt: "20px",
            mb: "20px",
            padding: "15px 0 15px 0",
            fontWeight: "bolder",
          }}
        >
          Contact-Us
        </Typography>

        <Stack gap={4} direction="row">
          <Paper
            elevation={24}
            sx={{
              borderRadius: "15",
              height: "500px",
              width: "500px",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.931500133318!2d78.20276697509921!3d26.23141518903733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c14c64938e5f%3A0x87b3d6a725f7b077!2sMadhav%20Institute%20of%20Technology%20%26%20Science%2C%20Gwalior!5e0!3m2!1sen!2sin!4v1683202994019!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Paper>
          <Paper
            elevation={20}
            sx={{
              borderRadius: "15",
              height: "500px",
              width: "500px",
            }}
          >
            <Stack gap={5}  sx={{ display: "flex", justifyContent: "center", alignContent: "center", padding:'7em' }}>
              <Box  >
                <LocationOnSharp></LocationOnSharp> Racecourse Rd, near Gola ka
                Mandir, Mela Ground, Thatipur, Gwalior, Madhya Pradesh 474005
              </Box>
              <Box>
                <LocalPhone></LocalPhone> 09425338833 
              </Box>
                                      
              <Box >
                <LanguageSharp></LanguageSharp> <Link  href="http://mitsgwalior.in/" target="_blank">http://mitsgwalior.in/</Link>
              </Box>
            </Stack>
          </Paper>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;


