import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../src/Components/Navbar"

import Home from "./Pages/Home";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Blog from "./Pages/Blog";
import Careers from "./Pages/Careers";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/whoweare" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/career" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;



