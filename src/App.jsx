import {Route, Routes} from "react-router-dom"
import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Projects";
import Footer from "./components/Footer";


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Project/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
