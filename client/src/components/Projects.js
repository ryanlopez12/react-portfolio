import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../App.css'

export default function Projects() {
  return (
    <div className="cards">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="screenshot"
        height="140"
        image="https://ryanlopez12.github.io/rlopez-portfolio/assets/horiseon.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Horiseon Refactor
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Horiseon refactor code. Assigned with debugging and consolidating
            code to follow standards and functionality.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Click Here!</Button>
        
      </CardActions>
    </Card>
    </div>
  );
}

   
     