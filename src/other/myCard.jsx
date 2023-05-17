import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard({ pic, text }) {
  return (
    <Card  sx={{maxWidth:'400px', boxShadow:'5','&:hover':{boxShadow:'24'}}}>
      <CardMedia component="img" alt="green iguana" height="350"  image={pic} />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{fontSize:'15px', fontWeight:'bold'}}>
          {text}
        </Typography>
      </CardContent>  
    </Card>
  );
}
