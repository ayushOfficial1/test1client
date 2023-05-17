import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validator from "validator";

const ForgetPass = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({
      ...user, // spread operator
      [name]: value,
    });
  };

  const checkMail = async (event) => {
    event.preventDefault();

    const { email } = user;

    console.log(email);

    let loginDetails = {
      sendTo: email,
    };

    //To check if entered valid email
    if (!validator.isEmail(email)) {
      alert("Incorrect email");
      return;
    }

    if (email) {
      try {
        const result = await axios.post(
          "http://localhost:4000/mail",
          loginDetails
        );
        if (result.data.msg) {
          alert(`Email sent to ${result.data.eid}`);
          navigate("/");
        } else {
          alert("User Not Found");
        }
      } catch (error) {
        alert("Something went wrong");
        console.log(error);
      }
    } else {
      alert("Missing Values");
    }
  };

  return (
    <Paper
      elevation={10}
      sx={{
        height: "30rem",
        width: "30rem",
        margin: "2rem auto 2rem auto",
        padding: "1em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          margin: "0 auto 1em auto",
          fontFamily: "Castoro Titling",
        }}
      >
        Enter your Registered Email
      </Typography>
      {/* , display:'flex', flexDirection:"column", justifyContent:"center" */}
      <Box sx={{ width: "70%", margin: "0 auto 0 auto" }}>
        <form onSubmit={checkMail}>
          <TextField
            id="outlined-password-input"
            label="Email"
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            sx={{ width: "100%", margin: "1rem auto 2rem auto" }}
          />

          <Button
            onClick={checkMail}
            variant="contained"
            color="success"
            type="submit"
            sx={{ width: "100%", height: "3rem", margin: "0 auto 1em auto" }}
          >
            Submit
          </Button>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "bolder",
              display: "flex",
              justifyContent: "center",
            }}
          >
            OR
          </Typography>
          <Button
            onClick={() => navigate("/")}
            variant="contained"
            color="secondary"
            type="reset"
            sx={{ width: "100%", height: "3rem", margin: "1em   auto 0 auto" }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Paper>
  );
};

export default ForgetPass;
