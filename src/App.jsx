import { useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Submit from "./pages/Submit";
import Header from "./components/Header";
import Top_Banner from "./components/Top_Banner";
import Phoenix from "/phoenix_darkmode.png"; // Import the Phoenix logo
import Banner_Video from "/phoenix_hero.mp4"; // Import the banner video

function App() {
  return (
    <>
      <Header Phoenix={Phoenix}/>
      <Top_Banner Banner_Video={Banner_Video} />
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
