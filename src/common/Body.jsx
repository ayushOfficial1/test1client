import React from "react";
import {
  Box,
  Paper,
  Card,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";
import Clock from "./Clock";
import ImgMediaCard from "../other/myCard";
import pic from "../images/announcement2.jpeg";

const Body = () => {
  const info = `
   Mark Down 📝👇
  📍 Dates : 14th & 15th April 2023
  📍 Teams or individual both can participate. (maximum size of each team must not exceed 4 participants)
  📍 Fee per team :  300/- and Fee per person: 100/-
  📍 Certificate of participation for all Participants.
  📍 Merit Certificates to winner and runner up team . 
  📍 Prize Pool : 10000/- 🤑🤑
  `;
  return (
    <>
      <Stack gap={1} direction={"row"} sx={{ margin: "5px" }}>
        <Paper elevation={20} sx={{ width: "25%", height: "41em" }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "monospace",
              fontWeight: "bolder",
              m: "2em auto 1em auto",
            }}
          >
            Today's Thoughts
          </Typography>
          <Paper
            elevation={5}
            sx={{
              width: "90%",
              margin: "0 auto 2em auto",
              backgroundColor: "lightpink",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                padding: "5px",
                fontFamily: "monospace",
                fontWeight: "bolder",
                m: "0 auto 1em auto",
              }}
            >
              “Education is the most powerful weapon which you can use to change
              the world.” - Nelson Mandela
            </Typography>
          </Paper>
          <Paper
            elevation={5}
            sx={{
              width: "90%",
              margin: "0 auto 2em auto",
              backgroundColor: "lightpink",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                padding: "5px",
                fontFamily: "monospace",
                fontWeight: "bolder",
                m: "0 auto 1em auto",
              }}
            >
              “Education is the most powerful weapon which you can use to change
              the world.” - Nelson Mandela
            </Typography>
          </Paper>
          <Paper
            elevation={5}
            sx={{
              width: "90%",
              margin: "0 auto 2em auto",
              backgroundColor: "lightpink",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                padding: "5px",
                fontFamily: "monospace",
                fontWeight: "bolder",
                m: "0 auto 1em auto",
              }}
            >
              “The function of education is to teach one to think intensively
              and to think critically. Intelligence plus character - that is the
              goal of true education.” - Martin Luther King Jr.
            </Typography>
          </Paper>
          <Paper
            elevation={5}
            sx={{
              width: "90%",
              margin: "0 auto 2em auto",
              backgroundColor: "lightpink",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                padding: "5px",
                fontFamily: "monospace",
                fontWeight: "bolder",
                m: "0 auto 1em auto",
              }}
            >
              “The beautiful thing about learning is that no one can take it
              away from you.” - B.B. King
            </Typography>
          </Paper>
        </Paper>
        <Paper elevation={20} sx={{ width: "50%", height: "41em" , display:'flex', flexDirection:'column',  alignItems:'center' }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "monospace",
              fontWeight: "bolder",
              m: "1.5em auto 1em auto",
            }}
          >
            Today's Announcements
          </Typography >
          <ImgMediaCard pic={pic} text={info} />
        </Paper>
        <Paper elevation={20} sx={{ width: "25%", height: "41em" }}>
          <Clock />
        </Paper>
      </Stack>
    </>
  );
};

export default Body;
