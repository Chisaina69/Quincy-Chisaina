import {Route, Routes} from "react-router-dom"
import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>

    </>
  )
}

export default App
