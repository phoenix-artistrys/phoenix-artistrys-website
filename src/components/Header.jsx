import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Phoenix from "/images/phoenix_dark_logo.png"; // Import the Phoenix logo

function Header({ navlink, navlink_text }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOffset = Math.min(scrollY, 805); // Move down max 100px
      setOffset(newOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header style={{ transform: `translateY(${offset}px)` }}>
      <nav className="GlassContainer">
        <div className="GlassContent">
          <menu>
            <li>
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <img
                  src={Phoenix}
                  alt="Phoenix Logo"
                  className="phoenix_logo"
                />
              </Link>
            </li>
            <li>
              <Link
                to={navlink}
                className="call_to_action"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {navlink_text}
              </Link>
            </li>
          </menu>
        </div>
        <div className="GlassMaterial">
          <div className="GlassEdgeReflection"></div>
          <div className="GlassEmbossReflection"></div>
          <div className="GlassRefraction"></div>
          <div className="GlassBlur"></div>
          <div className="BlendLayers"></div>
          <div className="BlendEdge"></div>
          <div className="Highlight"></div>
          <div className="Contrast"></div>
          <div className="Brightness"></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
