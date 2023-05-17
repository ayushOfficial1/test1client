import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const CreateCourse = () => {
  const navigate = useNavigate();

  const [courses, setCourse] = useState({
    department: "",
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

  const register = async (event) => {

    event.preventDefault();

    console.log(courses)
    const { department, course, weeks, start, end, exam } = courses;

    const formattedStart = moment(start).format("DD/MM/YYYY");
    const formattedEnd = moment(end).format("DD/MM/YYYY");
    const formattedExam = moment(exam).format("DD/MM/YYYY");
    
    console.log("department:", department);
    console.log("course:", course);
    console.log("weeks:", weeks);
    console.log("start:", formattedStart);
    console.log("end:", formattedEnd);
    console.log("exam:", formattedExam);

    if (department && course && weeks && start && end && exam) {
      const courseData = {
        Department: department,
        Course: course,
        Weeks: weeks,
        StartDate: formattedStart,
        EndDate: formattedEnd,
        ExamDate: formattedExam,
      };

      try {
        const result = await axios.post(
          "http://localhost:4000/api/course",
          courseData
        );
        if (result.data.msg) {
          alert("New Course Added ");
          navigate("/admincourses");
        } else {
          alert("Sorry! Something went wrong!");
          return;
        }
      } catch (error) {
        console.log(error);
      }
    }
    else{
        alert("Please Fill All the Fields")
    }
  };

  return (
    <Paper
      elevation={10}
      sx={{
        height: "50rem",
        width: "30rem",
        margin: "2rem auto 2rem auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          margin: "0 auto 1em auto",
          fontFamily: "Castoro Titling",
        }}
      >
        <strong>Create Course</strong>
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
            label="Department"
            type="text"
            name="department"
            value={courses.department}
            onChange={handleChange}
            sx={{ width: "100%" }}
          />
          <TextField
            id="outlined-password-input"
            label="Course"
            type="text"
            name="course"
            value={courses.course}
            onChange={handleChange}
            sx={{ width: "100%", mt: "1em" }}
          />
          <TextField
            id="outlined-password-input"
            label="Weeks"
            type="text"
            name="weeks"
            value={courses.weeks}
            onChange={handleChange}
            sx={{ width: "100%", marginTop: "1rem" }}
          />

          <TextField
            id="outlined-password-input"
            helperText="Start-Date"
            type="date"
            name="start"
            value={courses.start}
            onChange={handleChange}
            sx={{ width: "100%", marginTop: "1rem" }}
          />
          <TextField
            id="outlined-password-input"
            helperText="End-Date"
            type="date"
            name="end"
            value={courses.end}
            onChange={handleChange}
            sx={{ width: "100%", marginTop: "1rem" }}
          />
          <TextField
            id="outlined-password-input"
            helperText="Exam-Date"
            type="date"
            name="exam"
            value={courses.exam}
            onChange={handleChange}
            sx={{ width: "100%", marginTop: "1rem" }}
          />

          <Button
            variant="contained"
            color="secondary"
            type="submit"
            sx={{ width: "100%", height: "3rem", margin: "1em auto 1em auto" }}
          >
            Add
          </Button>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bolder",
              display: "flex",
              justifyContent: "center",
              mb: "1em",
            }}
          >
            OR
          </Typography>
          <Button
            onClick={() => navigate("/adminHome")}
            variant="contained"
            color="secondary"
            sx={{ width: "100%", height: "3rem", margin: "0 auto 1em auto" }}
          >
            Home
          </Button>
        </form>
      </Box>
    </Paper>
  );
};

export default CreateCourse;
