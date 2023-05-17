import React from "react";
import AdminNav from "./AdminNav";
import ShowCourses from "../common/ShowCourses";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Add, AddCircle } from "@mui/icons-material";

const AdminCourses = () => {
  const navigate = useNavigate();

  return (
    <>
      <AdminNav />   
      <ShowCourses />
    </>
  );
};

export default AdminCourses;
