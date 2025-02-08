// COPYRIGHT 2025 TANNER MARSH, NAIT WELSH & AIDAN YIP ALL RIGHTS RESERVED

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Submit from "./pages/Submit";
import Questions from "./pages/Questions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/questions" element={<Questions />} />
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
