import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import UserNav from "./UserNav";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const UserProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userInfo = location.state.userInfo;

  const formattedDate = moment(userInfo.UserDOB).format("DD/MM/YYYY");

  return (
    <>
      <UserNav />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          sx={{ maxWidth: 150, margin: 2 }}
          color="primary"
          variant="h5"
        >
          <strong>My Profile</strong>
        </Typography>
        <TableContainer
          component={Paper}
          sx={{ display: "flex", justifyContent: "center", width: "50em" }}
        >
          <Table sx={{ maxWidth: 350 }} aria-label="simple table">
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
              <TableRow
                key={userInfo._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {userInfo.UserName}
                </TableCell>
                <TableCell align="right">{userInfo.UserEmail}</TableCell>
                <TableCell align="right">{userInfo.UserMobile}</TableCell>
                <TableCell align="right">{formattedDate}</TableCell>
                <TableCell align="right">{userInfo.UserStatus}</TableCell>
                <TableCell align="center">
                  <Box sx={{ width: "100px", height: "100px" }}>
                    <img
                      src={userInfo.UserPhoto}
                      alt=".."
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                    />
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          variant="contained"
          color="warning"
          onClick={() => navigate("/editProfile")}
          sx={{ m: "1em" }}
        >
          Edit Profile
        </Button>
      </Box>
    </>
  );
};

export default UserProfile;
