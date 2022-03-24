import { ButtonGroup } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Box } from "@mui/system";
// import Logo from "../../src/logo.png";

function Navbar() {
  return (
    
        <Box
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 10,
          },
        }}>
            
        <ButtonGroup variant="contained" aria-label="large button group">
          <div>
    
                <NavLink to="/">
                  <Button>Home</Button>
                </NavLink>
             
              
                <NavLink to="/about">
                  <Button>About</Button>
                </NavLink>
              
             
                <NavLink to="/contact">
                  <Button>Contact</Button>
                </NavLink>
              
             
                <NavLink to="/projects">
                  <Button>Projects</Button>
                </NavLink>
             
   
          </div>
          </ButtonGroup>
    
          </Box>
  );
}

export default Navbar;
