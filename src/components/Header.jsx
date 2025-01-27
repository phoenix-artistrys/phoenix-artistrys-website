import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Phoenix from "/images/phoenix_dark_logo.png"; // Import the Phoenix logo

function Header({ navlink, navlink_text }) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.min(scrollY / 800, 1);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header style={{ opacity }}>
      <nav>
        <menu>
          <li>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img src={Phoenix} alt="Phoenix Logo" className="phoenix_logo" />
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
      </nav>
    </header>
  );
}

export default Header;
