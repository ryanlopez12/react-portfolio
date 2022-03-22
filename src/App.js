// import logo from './logo.svg';
import "./App.css";
import Contact from "../src/components/Contact.js";
import Projects from "../src/components/Projects.js";
import Navbar from "../src/components/Navbar.js";
import About from "../src/components/About.js";
import Home from "../src/components/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [categories] = useState([
    {
      name: "",
      description: "",
    },
    { name: "", 
      description: "" 
    },
    { name: "", 
      description: "" 
    },
    {
      name: "",
      description: "",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div className="App">
      <Router>
        <Navbar
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        />
        <Routes>
          <main>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </main>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
