import React from "react";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import { Box, Paper, Stack, Typography } from "@mui/material";
import ImgMediaCard from "../other/myCard";

const About = () => {
  const text1 =
    "Welcome to Eduportal, a resource-sharing platform designed to connect students with teachers and educational resources. Our mission is to facilitate communication and collaboration between students and educators, helping them share assignments, resources, and ideas.";

  const text2 =
    " Our platform offers a user-friendly interface that makes it easy for students to find and connect with teachers in their subject areas. Whether you're looking for help with a specific assignment or just want to explore new learning resources, Eduportal has got you covered.";

  const text3 =
    "At Eduportal, we believe that education should be a collaborative effort. That's why we've created a platform that makes it easy for students and teachers to work together towards a common goal. We're proud to have helped countless students improve their grades and achieve their academic goals.";
  return (
    <>
      <Typography
        variant="h3"
        
        sx={{
          fontFamily: ' "Castoro Titling", cursive;',
          mt: "20px",
          mb: "40px",
          fontWeight: "bolder",
        }}
      >
        <strong>About Us</strong>
      </Typography>
      <Stack
        gap={8}
        direction={"row"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"stretch"}
        sx={{}}
      >
        <ImgMediaCard pic={pic1} text={text1} />

        <ImgMediaCard pic={pic2} text={text2} />

        <ImgMediaCard pic={pic3} text={text3} />
      </Stack>
    </>
  );
};

export default About;


