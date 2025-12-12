// COPYRIGHT 2025 TANNER MARSH, NAIT WELSH & AIDAN YIP ALL RIGHTS RESERVED

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// base css
import "./styles/normalize_v2.css";
import "./styles/index.css";

// pages css
import "./pages/home.css";
import "./pages/submit.css";
import "./pages/questions.css";

// components css
import "./styles/header.css";
import "./styles/music_icons.css";
import "./styles/artists.css";
import "./styles/sample_packs.css";
import "./styles/about.css";
import "./styles/artwork.css";
import "./styles/faq_block.css";

// live button css
import "./styles/live_block.css";

// components
import App from "./App.jsx";

// utility function to scroll to top of page
import Scroll_To_Section from "./components/Scroll_To_Section";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Scroll_To_Section />
      <a href="#maincontent" id="skip_to_main" tabIndex={0}>Skip to main content</a>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
