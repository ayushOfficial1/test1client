import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const UpdateCourse = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const courseId = location.state.courseId;

  const [courses, setCourse] = useState({
    course: "",
    weeks: "",
    start: "",
    end: "",
    exam: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setCourse({
      ...courses, // spread operator
      [name]: value,
    });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    console.log(courses);
    const { course, weeks, start, end, exam } = courses;

    const formattedStart = moment(start).format("DD/MM/YYYY");
    const formattedEnd = moment(end).format("DD/MM/YYYY");
    const formattedExam = moment(exam).format("DD/MM/YYYY");

    console.log("course:", course);
    console.log("weeks:", weeks);
    console.log("start:", formattedStart);
    console.log("end:", formattedEnd);
    console.log("exam:", formattedExam);

    const courseData = {};

    if (course) courseData.Course = course;
    if (weeks) courseData.Weeks = weeks;
    if (start) courseData.StartDate = formattedStart;
    if (end) courseData.EndDate = formattedEnd;
    if (exam) courseData.ExamDate = formattedEnd;

    try {
      console.log("this is the id:", courseId);

      const result = await axios.put(
        `http://localhost:4000/api/course/${courseId}`,
        courseData
      );
      if (result.data.msg) {
        alert("Course Updated");
        navigate("/admincourses");
      } else {
        alert("Sorry! Something went wrong!");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper
      elevation={10}
      sx={{
        borderRadius: 5,
        height: "35rem",
        width: "30rem",
        padding: "10px",
        margin: "2rem auto 2rem auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          margin: "15px auto 0 auto",
          padding: "1px",
          fontFamily: "Castoro Titling",
        }}
      >
        <strong>Update Course</strong>
      </Typography>

      <Box
        sx={{
          width: "70%",
          margin: "5px auto 10px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleUpdate}>
          <TextField
            id="outlined-password-input"
            label="Course"
            type="text"
            name="course"
            value={courses.course}
            onChange={handleChange}
            sx={{ width: "100%", mt: "8px" }}
          />
          <TextField
            id="outlined-password-input"
            label="Weeks"
            type="text"
            name="weeks"
            value={courses.weeks}
            onChange={handleChange}
            sx={{ width: "100%", marginTop: "8px" }}
          />

          <TextField
            id="outlined-password-input"
            helperText="Start-Date"
            type="date"
            name="start"
            value={courses.start}
            onChange={handleChange}
            sx={{ width: "100%", marginTop: "8px" }}
          />
          <TextField
            id="outlined-password-input"
            helperText="End-Date"
            type="date"
            name="end"
            value={courses.end}
            onChange={handleChange}
            sx={{ width: "100%", marginTop: "8px" }}
          />
          <TextField
            id="outlined-password-input"
            helperText="Exam-Date"
            type="date"
            name="exam"
            value={courses.exam}
            onChange={handleChange}
            sx={{ width: "100%", marginTop: "8px" }}
          />

          <Button
            variant="contained"
            color="secondary"
            type="submit"
            sx={{
              width: "100%",
              height: "2.5rem",
              margin: "5px auto 5px auto",
            }}
          >
            Update
          </Button>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bolder",
              display: "flex",
              justifyContent: "center",
              mb: "5px",
            }}
          >
            OR
          </Typography>
          <Button
            onClick={() => navigate("/adminHome")}
            variant="contained"
            color="secondary"
            sx={{ width: "100%", height: "2.5rem", margin: "0 auto 5px auto" }}
          >
            Home
          </Button>
        </form>
      </Box>
    </Paper>
  );
};
export default UpdateCourse;
