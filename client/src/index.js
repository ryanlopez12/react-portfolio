import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import * as serviceWorker from './serviceWorker.js';
// import logo from './logo.svg';
import "./App.css";
import Contact from "./components/Contact";
import Projects from "./components/Projects.js";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import '@material-ui/core';
const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


    ReactDOM.render(
    
      <Router>
        <Navbar />
        
        <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        
        </Routes>
        <Footer />
      </Router>,


    document.getElementById("root")
  );


serviceWorker.unregister();

