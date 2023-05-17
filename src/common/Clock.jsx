import { Box, Paper, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

function Clock() {
  const [time, setTime] = useState(new Date());

  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Stack gap={3}>
      <Typography component={Paper} elevation={10} variant="h4" sx={{ fontWeight: "bolder", m: "1em", p:'10px',backgroundColor: 'lightgreen' }}>
        {time.toLocaleTimeString()}
      </Typography>
      <Box>
        <Typography  variant="h5" sx={{ fontWeight: "bolder", mb: "1em" }}>
          Today's Date
        </Typography>
        <Paper elevation={5} sx={{width:'90%' , margin:'0 auto 4em auto', backgroundColor: 'lightyellow'}}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
        </Paper>
      </Box>
    </Stack>
  );
}

export default Clock;
