// COPYRIGHT 2025 TANNER MARSH, NAIT WELSH & AIDAN YIP ALL RIGHTS RESERVED

// react router
import { Link } from "react-router-dom";

// components
import Arrow_Down from "../components/Arrow_Down.jsx";
import link_to from "../components/Arrow_Down.jsx";
import Music_Icons from "../components/Music_Icons";
import Artists from "../components/Artists";
import Sample_Packs from "../components/Sample_Packs";
import Artwork from "../components/Artwork.jsx";
import About from "../components/About";

// header components
import Header from "../components/Header";

// banner video
import Banner_Video from "/video/phoenix_hero.mp4"; // Import the banner video
import Top_Banner from "../components/Top_Banner";

// artwork
import phoenix_logo_large from "/images/phoenix_logo_large.png";

function Home() {
  return (
    <>
      <Header navlink="/submit" navlink_text="Submit" />
      <Top_Banner Banner_Video={Banner_Video} />
      <main id="main_content">
        {/* banner */}
        <section className="banner_content">
          <h1 className="hero_title">Phoenix Artistrys</h1>
          <div id="hero_button_div">
            <Link
              to="/submit"
              className="hero_link call_to_action"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Submit
            </Link>
            <a href="#music_icons_container" className="hero_link">
              Listen
            </a>
          </div>
          <Arrow_Down to={link_to} />
        </section>
        {/* page Body */}
        <section className="section" id="phoenix_main">
          <div id="phoenix_main_inner">
            <h2 className="center_text">Featured</h2>

            {/* featured video */}
            <iframe
              src="https://www.youtube-nocookie.com/embed/qWbVPV-Hq5A?si=mHmd77xuZYzH_XjM&amp;start=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              frameBorder="0"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            {/* platforms */}
            <div id="music_icons_container">
              <h2 className="center_text">Platforms</h2>
              <Music_Icons />
            </div>

            {/* artists */}
            <Artists />

            {/* sample packs */}
            <Sample_Packs />

            {/* about */}
            <About />
          </div>

          {/* artwork */}
          <Artwork phoenix_logo_large={phoenix_logo_large} />
        </section>
      </main>
    </>
  );
}

export default Home;
