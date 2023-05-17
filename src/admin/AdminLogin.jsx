import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({
      ...user, // spread operator
      [name]: value,
    });
  };

  const checkLogin = async (event) => {
    event.preventDefault();

    const { name, password } = user;

    console.log(name);
    console.log(password);

    let loginDetails = {
      AdminId: name,
      AdminPassword: password,
    };

    if (name && password) {
      try {
        const result = await axios.post(
          "http://localhost:4000/api/admin/adminLogin",
          loginDetails,
          { withCredentials: true, credentials: "include" }
        );
        if (result.data.msg) {
          alert("Credentials Matched");
          const token = result.data.token;
          localStorage.setItem("adminToken", token);
          navigate("/adminHome");
        } else {
          alert("Incorrect Values");
        }
      } catch (error) {
        alert("Invalid Credentials");
        console.log(error);
      }
    } else {
      alert("Missing Values");
    }
  };

  return (
    <Paper
      elevation={20}
      sx={{
        height: "30rem",
        width: "30rem",
        margin: "6rem auto 2rem auto",
        padding: "1em",
        display: "flex",
        flexDirection: "column",
        // alignContent:'center',
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          margin: "0 auto 1em auto",
          fontFamily: "Castoro Titling",
          fontWeight:'bolder'
        }}
      >
        <strong>Admin</strong>
      </Typography>

      <Box sx={{ width: "80%", margin: "0 auto 0 auto" }}>
        <form onSubmit={checkLogin}>
          <TextField
            id="outlined-password-input"
            label="Admin-Id"
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            sx={{ width: "100%", margin: "1rem auto 0 auto" }}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            sx={{ width: "100%", margin: "1rem auto 2rem auto" }}
          />

          <Button
            onClick={checkLogin}
            variant="contained"
            color="error"
            type="submit"
            sx={{ width: "100%", height: "3rem", margin: "0 auto 1em auto" }}
          >
            Sign In
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
            User Login
          </Button>
        </form>
      </Box>
    </Paper>
  );
};

export default AdminLogin;
