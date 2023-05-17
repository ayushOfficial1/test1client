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
import { AddCircle, Delete, Edit, RefreshSharp } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ShowCourses = () => {
  const navigate = useNavigate();

  const [data, setdata] = useState([]);
  const fetchData = async () => {
    try {
      const resp = await fetch("http://localhost:4000/api/course");
      const apidata = await resp.json();
      console.log("Data", apidata);
      setdata(apidata);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const adminToken = localStorage.getItem("adminToken");

    if (id && adminToken) {
      try {
        const result = await axios.delete(
          `http://localhost:4000/api/course/${id}`
        );
        console.log(`Deleting course with id: ${id}`); // Add this line to log the user id

        if (result.data.msg) {
          alert("Course Deleted");
          fetchData(); // Fetch updated data after deleting user
          return;
        } else {
          alert("Course Deletion Failed");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Only System Administrator can perform this action!");
      return;
    }
  };

  const handleUpdate = async (id) => {
    const adminToken = localStorage.getItem("adminToken");

    if (id && adminToken) {
      try {
        navigate("/updateCourse", { state: { courseId: id } });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Only System Administrator can perform this action!");
      return;
    }
  };

  const handleAdd = async () => {
    const adminToken = localStorage.getItem("adminToken");

    if (adminToken) {
      try {
        navigate("/createCourse");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Only System Administrator can perform this action!");
      return;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {/* Showing the courses */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2em",
        }}
      >
        <TableContainer
          component={Paper}
          elevation={10}
          sx={{
            display: "flex",
            justifyContent: "center",
            borderRadius: "10px",
            width: "55em",
          }}
        >
          <Table sx={{ width:"80%"}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Department</strong>
                </TableCell>
                <TableCell align="right"><strong>Courses</strong></TableCell>
                <TableCell align="right"><strong>Weeks</strong></TableCell>
                <TableCell align="right"><strong>Start-Date</strong></TableCell>
                <TableCell align="right"><strong>End-Date</strong></TableCell>
                <TableCell align="center"><strong>Exam-Date</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((d, i) => (
                <TableRow
                  key={d._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {d.Department}
                  </TableCell>
                  <TableCell align="right">{d.Course}</TableCell>
                  <TableCell align="right">{d.Weeks}</TableCell>
                  <TableCell align="right">{d.StartDate}</TableCell>
                  <TableCell align="right">{d.EndDate}</TableCell>
                  <TableCell align="right">{d.ExamDate}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleDelete(d._id)}>
                      <Delete sx={{ "&:hover": { color: "red" } }} />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleUpdate(d._id)}>
                      <Edit sx={{ "&:hover": { color: "blue" } }} />
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
          sx={{ borderRadius: "10px", marginLeft: "40em", mt: "15px" }}
        >
          <Tooltip title="Add-Course" placement="left">
            <IconButton>
              <AddCircle
                color="warning"
                fontSize="medium"
                onClick={handleAdd}
                sx={{ "&:hover": { color: "green" } }}
              />
            </IconButton>
          </Tooltip>
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

export default ShowCourses;
