// COPYRIGHT 2025 TANNER MARSH, NAIT WELSH & AIDAN YIP ALL RIGHTS RESERVED

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Submit from "./pages/Submit";
import Header from "./components/Header";
import Phoenix from "/phoenix_darkmode.png"; // Import the Phoenix logo

function App() {
  return (
    <>
      <Header Phoenix={Phoenix}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
    </>
  );
}

export default App;

// Pages:

// Nav bar (Has logo and Submit button)
// Header 
// Banner video (Add links)
// Featured section
// Platforms (Music and Socials)
// Volumes
// Sample Packs
