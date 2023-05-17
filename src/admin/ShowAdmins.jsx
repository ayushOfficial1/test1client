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
import { AddCircle, Refresh, RefreshSharp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ShowAdmins = () => {
  const [data, setdata] = useState([]);
  const navigate = useNavigate()
  const fetchData = async () => {
    try {
     
      const resp = await fetch("http://localhost:4000/api/admin/");
      const apidata = await resp.json();
      console.log("Data", apidata);
      setdata(apidata);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
    <AdminNav/>
      {/* Showing the Admins */}
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center", margin:'1em auto 1em auto' }}
      >   
        <TableContainer
          component={Paper}
          elevation={5}
          sx={{ display: "flex", justifyContent: "center" , alignItems:'center', width:'400px',borderRadius:'10px' , mt:'10px', mb:'10px'}}
        >
          <Table sx={{ maxWidth: 325 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Admin Name</TableCell>                
                <TableCell align="center">Admin Photo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((d, i) => (
                <TableRow
                  key={d._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {d.AdminId}
                  </TableCell>
                 
                  <TableCell align="center">
                    {" "}
                    <Box sx={{ width: "100px", height: "100px" ,display:"flex", justifyContent:"flex-end"}}>
                      <img
                        src={d.Photo}
                        alt=".."
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                      />
                    </Box>
                  </TableCell> 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack
          component={Paper}
          elevation={10}
          gap={1}
          direction="row"
          sx={{ borderRadius: "10px", marginLeft: "20em", mt: "15px",  }}
        >
          <Tooltip title="Add-Admin" placement="left">
            <IconButton>
              <AddCircle
                color="warning"
                fontSize="medium"
                onClick={()=>navigate('/createAdmin')}
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

export default ShowAdmins;
