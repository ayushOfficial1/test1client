import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    localStorage.clear();
  }, []);

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

    const { email, password } = user;

    console.log(email);
    console.log(password);

    let loginDetails = {
      UserEmail: email,
      UserPassword: password,
    };

    if (email && password) {
      try {
        const result = await axios.post(
          "http://localhost:4000/api/user/login",
          loginDetails,
          { withCredentials: true, credentials: "include" }
        );
        if (result.data.msg) {
          alert("Credentials Matched");
          const token = result.data.token;
          localStorage.setItem("token", token);

          navigate("/userHome");
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
      elevation={24}
      sx={{
        height: "30rem",
        width: "30rem",
        margin: "6rem auto 2rem auto",
        padding: "2em",
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
          fontWeight:'bolder'
        }}
      >
        User Login
      </Typography>
      {/* , display:'flex', flexDirection:"column", justifyContent:"center" */}
      <Box sx={{ width: "80%", margin: "0 auto 0 auto" }}>
        <form onSubmit={checkLogin}>
          <TextField
            id="outlined-password-input"
            label="Email"
            type="email"
            name="email"
            value={user.email}
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
            color="secondary"
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
            onClick={() => navigate("/reg")}
            variant="contained"
            color="secondary"
            type="reset"
            sx={{ width: "100%", height: "3rem", margin: "1em   auto 0 auto" }}
          >
            Register
          </Button>
          <Stack gap={2} direction="row" sx={{mt:'2em', display:'flex', alignContent:'center', justifyContent:'center'}}>
            <Typography
              to="/guestHome"
              component={NavLink}
              variant="subtitle1"
              sx={{
                textDecoration: "none",
                fontWeight: "bolder",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Guest-Login
            </Typography>
            <Typography
              to="/adminLogin"
              component={NavLink}
              variant="subtitle1"
              sx={{
                textDecoration: "none",
                color: "red",
                fontWeight: "bolder",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Admin-Login
            </Typography>
            <Typography
              to="/sendMail"
              component={NavLink}
              variant="subtitle1"
              sx={{
                color: "green",
                textDecoration: "none",
                fontWeight: "bolder",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Forget Password
            </Typography>
          </Stack>
        </form>
      </Box>
    </Paper>
  );
};

export default Login;
