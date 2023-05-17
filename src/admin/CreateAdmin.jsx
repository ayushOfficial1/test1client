import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateAdmin = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
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

    const { username, password, confirmPassword } = user;

    console.log("Admin Name:", username);

    console.log("password:", password);
    console.log("confirmPassword:", confirmPassword);

    if (username && password === confirmPassword) {
      const adminData = {
        AdminId: username,
        AdminPassword: password,
        UserPhoto: "https://picsum.photos/200/300",
      };

      try {
        const result = await axios.post(
          "http://localhost:4000/api/admin/createAdmin",
          adminData
        );
        if(result){

            alert("Admin Registered");
            navigate("/adminLogin");
        }
        else{
            alert("Something went wrong");
            return;
        }
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
        height: "30rem",
        width: "30rem",
        margin: "5rem auto 2rem auto",
        display: "flex",
        flexDirection: "column",
        alignItems:'center',
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          margin: "0 auto 1em auto",
          fontFamily: "Castoro Titling",
          mt:'1em'
        }}
      >
        Register Admin
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
            sx={{ width: "100%", marginTop: "1rem", mb:'1rem' }}          />

          

          <Button
            variant="contained"
            color="secondary"
            type="submit"
            sx={{ width: "100%", height: "3rem", margin: "0 auto 1rem auto" }}
          >
            Submit
          </Button>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bolder",
              display: "flex",
              justifyContent: "center",
              mb: "1rem",
            }}
          >
            OR
          </Typography>
          <Button
            onClick={() => navigate("/adminLogin")}
            variant="contained"
            color="secondary"
            sx={{ width: "100%", height: "3rem", margin: "0 auto 1em auto" }}
          >
            Admin-Login
          </Button>
        </form>
      </Box>
    </Paper>
  );
};

export default CreateAdmin;
