import React from "react";
import {Card, CardMedia, Typography, CardContent} from "@material-ui/core";

function About() {
  return (
    
    <Card
      sx={{
        maxWidth: 100,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        "& > *": {
          m: 3,
        },
      }}
      >
   <CardMedia />
     <CardContent>
     <Typography gutterBottom variant="h5" component="div">
      <h1>About</h1>
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Hello! My name is Ryan Lopez and I am a recent graduate from UC Davis Coding Bootcamp. 
      I love coding and I'm passionate about technology.
       After 23 years in retail, I have recently switched careers into I.T.  
         I have been married to my wife, Kristine, for 11 years 
      and together we have a son named Jackson who is 8 years old.
      </Typography>
      </CardContent>
         
         
          </Card>

  );
}

export default About;