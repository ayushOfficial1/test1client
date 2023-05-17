import { Box, Button, IconButton, Stack, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AdminNav from "./AdminNav";
import { Delete, RefreshSharp } from "@mui/icons-material";
import axios from "axios";
import moment from "moment";

const ShowUsers = () => {
  const [data, setdata] = useState([]);

  const fetchData = async () => {
    try {
      const resp = await axios.get("http://localhost:4000/api/user");
      const apidata = resp.data;
      console.log("Data", apidata);
      setdata(apidata);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    if (id) {
      try {
        const result = await axios.delete(
          `http://localhost:4000/api/user/${id}`
        );
        console.log(`Deleting user with id: ${id}`); // Add this line to log the user id

        if (result.data.msg) {
          alert("User Deleted");
          fetchData(); // Fetch updated data after deleting user
          return;
        } else {
          alert("User Deletion Failed");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <AdminNav />
      {/* Showing the courses */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          m: "10px auto 2em auto",
        }}
      >
        <TableContainer
        fontFamily={"'Lilita One', cursive"}
          component={Paper}
          elevation={10}
          sx={{
            display: "flex",
            justifyContent: "center",
            borderRadius: "10px",
            maxWidth: "70%",
          }}
        >
          <Table sx={{ maxWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>UserName</TableCell>
                <TableCell align="right">UserEmail</TableCell>
                <TableCell align="right">UserMobile</TableCell>
                <TableCell align="right">UserDOB</TableCell>
                <TableCell align="right">UserStatus</TableCell>
                <TableCell align="right">UserPhoto</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((d, i) => (
                <TableRow
                  key={d._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {d.UserName}
                  </TableCell>
                  <TableCell align="right">{d.UserEmail}</TableCell>
                  <TableCell align="right">{d.UserMobile}</TableCell>
                  <TableCell align="right">
                    {moment(d.UserDOB).format("DD/MM/YYYY")}
                  </TableCell>
                  <TableCell align="center">{d.UserStatus}</TableCell>
                  <TableCell align="right">
                    <Box sx={{ width: "100px", height: "100px" }}>
                      <img
                        src={d.UserPhoto}
                        alt=".."
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                      />
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDelete(d._id)}
                    >
                      <Delete sx={{ "&:hover": { color: "red" } }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack
          component={Paper}
          elevation={10}
          gap={2}
          direction="row"
          sx={{ borderRadius: "10px", marginLeft: "59em", mt: "15px" }}
        >
          <Tooltip title="Refresh-Data" placement="right">
            <IconButton onClick={fetchData}>
              <RefreshSharp
                color="warning"
                fontSize="medium"
                sx={{
                  "&:hover": { color: "green" },
                }}
              />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>
    </>
  );
};

export default ShowUsers;
