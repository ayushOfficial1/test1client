import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    usermobile: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({
      ...user, // spread operator
      [name]: value,
    });
  };

  const register = async (event) => {
    event.preventDefault();

    const { username, email, password, confirmPassword, usermobile, dob } =
      user;

    console.log("username:", username);
    console.log("email:", email);
    console.log("password:", password);
    console.log("confirmPassword:", confirmPassword);
    console.log("usermobile:", usermobile);
    console.log("dob:", dob);

    if (
      username &&
      email &&
      password === confirmPassword &&
      usermobile &&
      dob
    ) {
      const userData = {
        UserName: username,
        UserEmail: email,
        UserMobile: usermobile,
        UserPassword: password,
        UserDOB: dob,
        UserStatus: "pending",

        UserPhoto: "https://picsum.photos/200/300",
      };

      try {
        const result = await axios.post(
          "http://localhost:4000/api/user/",
          userData
        );
        alert("User Registered");
        navigate("/");
      } catch (error) {
        console.log(error);
      }      
     
    } else {
      alert("invalid");
    }
  };

  return (
    <Paper
      elevation={10}
      sx={{
        height: "50rem",
        width: "30rem",
        margin: "2rem auto 2rem auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          margin: "0 auto 1em auto",
          fontFamily: "Castoro Titling",
        }}
      >
        Register
      </Typography>

      <Box
        sx={{
          width: "70%",
          margin: "1em auto 1em auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form onSubmit={register}>
          <TextField
            id="outlined-password-input"
            label="User Name"
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            sx={{ width: "100%" }}
          />
          <TextField
            id="outlined-password-input"
            label="Email"
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            sx={{ width: "100%", mt: "1em" }}
          />
          <TextField
            id="outlined-password-input"
            label="Mobile"
            type="number"
            name="usermobile"
            value={user.usermobile}
            onChange={handleChange}
            sx={{ width: "100%", marginTop: "1rem" }}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            sx={{ width: "100%", marginTop: "1rem" }}
          />
          <TextField
            id="outlined-password-input"
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
            sx={{ width: "100%", marginTop: "1rem" }}
          />

          <TextField
            id="outlined-password-input"
            helperText={<strong>Date of Birth</strong>}
            type="date"
            name="dob"
            value={user.dob}
            onChange={handleChange}
            sx={{ width: "100%", margin: "1rem auto 2rem auto" }}
          />

          <Button
            variant="contained"
            color="secondary"
            type="submit"
            sx={{ width: "100%", height: "3rem", margin: "0 auto 1em auto" }}
          >
            Submit
          </Button>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bolder",
              display: "flex",
              justifyContent: "center",
              mb: "1em",
            }}
          >
            OR
          </Typography>
          <Button
            onClick={() => navigate("/")}
            variant="contained"
            color="secondary"
            sx={{ width: "100%", height: "3rem", margin: "0 auto 1em auto" }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Paper>
  );
};

export default Register;
