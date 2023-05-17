import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, MenuItem, Menu, Stack, styled } from "@mui/material";

import BookIcon from "@mui/icons-material/Book";
import { useState } from "react";

import { Link as RouterLink, useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import { Home } from "@mui/icons-material";

const GuestNav = () => {
  const navigate = useNavigate()
  const [open, setopen] = useState(false);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  return (

    <Box>
      <AppBar position="sticky">
        <StyledToolbar bgColor="primary">
        <IconButton onClick={()=>navigate('/guestHome')} sx={{mr:'1em'}}>
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
              color="inherit"
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              <Link
                to="/"
                component={RouterLink}
                color="inherit"
                underline="none"
              >
                Login
              </Link>
            </Button>
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
                  to="/login"
                  component={RouterLink}
                  color="inherit"
                  underline="none"
                >
                  Login
                </Link>
              </MenuItem>
            </Menu>
          </Stack>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default GuestNav;
