import {  Box, Button, Paper, TextField} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

const UserForm = () => {
  const navigate = useNavigate()
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    usermobile: "",
    dob: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password, confirmPassword, username, usermobile, dob } =
      formData;

    if(email && username && usermobile && (password===confirmPassword)){
      const userData = {
        UserName: username,
        UserEmail: email,
        UserMobile: usermobile,
        UserPassword: password,
        UserDOB: dob,
        UserStatus: "pending",
        UserPhoto: "RandomBullShitGo",
      };
  
      axios
        .post("http://localhost:4000/api/user/", userData)
        .then((res) => {
          alert(res.data.msg);
          navigate('/services')
        })
        .catch((e) => console.log(e));
  
      setFormData = {
        email: "",
        password: "",
        confirmPassword: "",
        username: "",
        usermobile: "",
        dob: "",
      };
    }
    else{
      alert('Invalid Entries')
    }
   
  };

  return (
    <Box
      sx={{
        width: {
          sm: "40%",
          xs: "80%",
        },
        height: "500px",
        margin: "auto",
        padding: 5,
      }}
    >
      <Paper
        elevation={"15"}
        sx={{
          width: "100%",
          height: "100%",
          margin: "auto",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          {isRegistering && (
            <>
              <TextField
                sx={{
                  marginBottom: "10px",
                }}
                variant="outlined"
                label="User Name"
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
              <br />
            </>
          )}
          <TextField
            sx={{
              marginBottom: "10px",
            }}
            variant="outlined"
            label="Email"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <br />
          {isRegistering && (
            <>
              <TextField
                sx={{
                  marginBottom: "10px",
                }}
                variant="outlined"
                label="Mobile"
                type="number"
                id="usermobile"
                name="usermobile"
                value={formData.usermobile}
                onChange={handleInputChange}
              />
              <br />
            </>
          )}
          <TextField
            sx={{
              marginBottom: "10px",
            }}
            variant="outlined"
            label="Password"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <br />
          {isRegistering && (
            <>
              <TextField
                sx={{
                  marginBottom: "10px",
                }}
                variant="outlined"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                h
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              <br />
            </>
          )}
          {isRegistering && (
            <>
              <TextField
                sx={{
                  marginBottom: "10px",
                }}
                variant="outlined"
                helperText="Date of Birth"
                hint="Date of Birth"
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
              />
              <br />
            </>
          )}
          {!isRegistering ? (
            <>
              <Button
                sx={{ margin: "10px" }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Sign In
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="myButton"
                onClick={() => setIsRegistering(true)}
              >
                Sign Up
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="contained"
                color="success"
                type="submit"
                onClick={() => setIsRegistering(false)}
              >
                Submit
              </Button>
            </>
          )}
        </form>
      </Paper>
    </Box>
  );
};

export default UserForm;
