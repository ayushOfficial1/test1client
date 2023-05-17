import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, MenuItem, Menu, Stack, styled } from "@mui/material";
import axios from "axios";

import BookIcon from "@mui/icons-material/Book";
import { useState } from "react";

import { Link as RouterLink, useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import { Home } from "@mui/icons-material";


const UserNav = () => {

  const navigate = useNavigate();

  
  const [open, setopen] = useState(false);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const chkProfile = async (req, res) => {
    const token = localStorage.getItem("token");
    console.log(token);
    
    try {
      const result = await axios.get(
        `http://localhost:4000/api/user/profile?msg=${token}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (result.data.msg) {
        alert("token-found");
        console.log(result.data.user)
        
        navigate("/profile", { state: { userInfo: result.data.user } });
             
      } else {
        alert(result.data.user);
        navigate("/userHome");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Box>
      <AppBar position="sticky">
        <StyledToolbar bgColor="secondary">
        <IconButton onClick={()=>navigate('/userHome')} sx={{mr:'1em'}}>
            <Home fontSize="large" sx={{ color: "white" }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            fontWeight={700}
            sx={{ display: { xs: "none", sm: "flex" }, flexGrow: 1 }}
          >
            Educapedia
          </Typography>
          <Stack position="right" direction={"row"} spacing={{ sm: 2, xs: 1 }}>
            <Button
              color="inherit"
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              <Link
                to="/courses"
                component={RouterLink}
                color="inherit"
                underline="none"
              >
                Courses
              </Link>
            </Button>

            <Button
              color="inherit"
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              <Link
                to="/contact"
                component={RouterLink}
                color="inherit"
                underline="none"
              >
                Contact
              </Link>
            </Button>
            <Button
              color="inherit"
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              <Link
                to="/about"
                component={RouterLink}
                color="inherit"
                underline="none"
              >
                About
              </Link>
            </Button>
            <Button
              onClick={chkProfile}
              color="inherit"
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              Profile
            </Button>
            <Button
              color="inherit"
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              <Link
                to="/"
                component={RouterLink}
                color="inherit"
                underline="none"
              >
                SignOut
              </Link>
            </Button>

{/* This is just for the mobile view */}
            <IconButton
              color="inherit"
              id="basic-button"
              onClick={(e) => setopen(true)}
              sx={{ display: { xs: "block", sm: "none" }, flexGrow: 1 }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>

            <Menu
              id="basic-menu"
              open={open}
              onClose={(e) => setopen(false)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem>
                <Link
                  to="/courses"
                  component={RouterLink}
                  color="inherit"
                  underline="none"
                >
                  Courses
                </Link>
              </MenuItem>

              <MenuItem>
                <Link
                  to="/about"
                  component={RouterLink}
                  color="inherit"
                  underline="none"
                >
                  About
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="/contact"
                  component={RouterLink}
                  color="inherit"
                  underline="none"
                >
                  Contact
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="/usercourses"
                  component={RouterLink}
                  color="inherit"
                  underline="none"
                >
                  Profile
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  onClick={handleLogout}
                  component={RouterLink}
                  color="inherit"
                  underline="none"
                >
                  SignOut
                </Link>
              </MenuItem>
            </Menu>
          </Stack>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default UserNav;
