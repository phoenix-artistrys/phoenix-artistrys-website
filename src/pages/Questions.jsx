// COPYRIGHT 2025 TANNER MARSH, NAIT WELSH & AIDAN YIP ALL RIGHTS RESERVED

// react router
import { Link } from "react-router-dom";

// import { useEffect } from "react";

//components
import Arrow_Down from "../components/Arrow_Down";
import link_to from "../components/Arrow_Down";
import Accordion from "../components/Faq";

// header components
import Header from "../components/Header";

// banner video
import Banner_Video from "/video/phoenix_hero_sub.mp4"; // Import the banner video
import Top_Banner from "../components/Top_Banner";

function Questions() {
  return (
    <div>
      <Header navlink="/" navlink_text="Back" />
      <Top_Banner Banner_Video={Banner_Video} />
      <main id="maincontent">
        {/* Banner */}
        <section className="banner_content lighter_filter" id="faq_banner">
          <h1 className="hero_title" tabIndex={0}>
            FAQ
          </h1>
          <div id="hero_button_div">
            <Link
              to="/"
              className="hero_link call_to_action"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Back
            </Link>
          </div>
          <Arrow_Down to={link_to} />
        </section>

        {/* Page Body */}
        <section
          className="section flex_center phoenix_main_questions"
          id="phoenix_main"
        >
          <h2 id="questions_header" tabIndex={0}>FAQ</h2>
          <Accordion />
          <Link
            to="/"
            className="hero_link call_to_action margin_top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Questions;
