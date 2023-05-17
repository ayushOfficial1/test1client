import { Box, Paper } from "@mui/material";
import React from "react";

const myHero = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Paper elevation={10} sx={{ height: "5rem", width: "5rem" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam repellat eos unde commodi esse, laborum nulla non beatae iure labore placeat? Fugit doloribus ex excepturi vero iste minima sit quisquam temporibus.
      </Paper>
    </Box>
  );
};

export default myHero;
