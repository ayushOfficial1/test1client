import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserEditProfile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
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

  const handleUpdate = async (event) => {
    event.preventDefault();

    const { email, password, confirmPassword, usermobile, dob } = user;

    console.log("email:", email);
    console.log("password:", password);
    console.log("confirmPassword:", confirmPassword);
    console.log("usermobile:", usermobile);
    console.log("dob:", dob);

    const userData = {};

    if (email) userData.UserEmail = email;
    if (usermobile) userData.UserMobile = usermobile;
    if (password && password === confirmPassword)
      userData.UserPassword = password;
    if (dob) userData.UserDOB = dob;

    userData.UserStatus = "pending";
    userData.UserPhoto = "https://picsum.photos/200/300";

    const token = localStorage.getItem("token");
    console.log(token);

    try {
      const result = await axios.put(
        `http://localhost:4000/api/user/update?msg=${token}`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (result.data.msg) {
        alert("token-found and Profile Updated");
        console.log(result.data.user);
        navigate("/profile", { state: { userInfo: result.data.user } });
      } else {
        alert(
          `Something went wrong! Profile Can't be updated ! Redirecting to USER-HOME`
        );
        localStorage.clear()
        navigate("/userHome");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper
      elevation={20}
      sx={{
        height: "33rem",
        width: "30rem",
        margin: "5rem auto 2rem auto",
        p: "1em",
        display: "flex",
        flexDirection: "column",
        
      }}
    >
      <Typography
        variant="h5"
        sx={{
          margin: "10px auto 10px auto",
          fontFamily: "Castoro Titling",
        }}
      >
        Edit Profile
      </Typography>

      <Box
        sx={{
          width: "70%",
          margin: "5px auto 1em auto",        
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleUpdate}>
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
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ width: "100%", height: "3rem", margin:'0 auto 1em auto ' }}
          >
            Save
          </Button>
        </form>
      </Box>
    </Paper>
  );
};

export default UserEditProfile;
