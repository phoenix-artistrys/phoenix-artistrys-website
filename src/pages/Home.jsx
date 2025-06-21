// COPYRIGHT 2025 TANNER MARSH, NAIT WELSH & AIDAN YIP ALL RIGHTS RESERVED

// react router
import { Link } from "react-router-dom";

// animations
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

// components
import Arrow_Down from "../components/Arrow_Down.jsx";
import link_to from "../components/Arrow_Down.jsx";
import Music_Icons from "../components/Music_Icons";
import Artists from "../components/Artists";
import Sample_Packs from "../components/Sample_Packs";
import Artwork from "../components/Artwork.jsx";
import About from "../components/About";
import Faq_Block from "../components/Faq_Block";

// header components
import Header from "../components/Header";

// banner video
import Banner_Video from "/video/phoenix_hero.mp4"; // Import the banner video
import Top_Banner from "../components/Top_Banner";
import Video_Poster from "/images/video_placeholder.png"; // Import the video poster

// artwork
import phoenix_logo_large from "/images/phoenix_logo_large.png";
import blue_phoenix from "/images/blue_phoenix.png";
import audiophobia_clear from "/images/audiophobia_clear.png";
import skremzy_blue from "/images/skremzy_blue.png";
import nwlogo from "/images/nwlogo.png";

function Home() {
  return (
    <>
      <Header navlink="/submit#submit_banner" navlink_text="Submit" />
      <Top_Banner Banner_Video={Banner_Video} Video_Poster={Video_Poster} />
      <main id="maincontent">
        {/* banner */}
        <section className="banner_content">
          <h1 className="hero_title" tabIndex={0}>
            Phoenix Artistrys
          </h1>
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
          <div id="phoenix_main_inner" className="home_section">
            <h2 className="center_text padding_bottom" tabIndex={0}>
              Featured
            </h2>

            {/* featured video */}
            <iframe
              src="https://www.youtube-nocookie.com/embed/qWbVPV-Hq5A?si=mHmd77xuZYzH_XjM&amp;start=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              frameBorder="0"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
              data-aos-once="false"
            ></iframe>

            <div className="divider"></div>

            {/* platforms */}

            <Music_Icons />

            {/* artists */}
            <Artists />

            {/* sample packs */}
            <Sample_Packs />

            {/* faq */}
            <Faq_Block />

            {/* about */}
            <About />
          </div>

          {/* artwork */}
          <Artwork
            phoenix_logo_large={phoenix_logo_large}
            blue_phoenix={blue_phoenix}
            audiophobia_clear={audiophobia_clear}
            skremzy_blue={skremzy_blue}
            nwlogo={nwlogo}
          />
        </section>
      </main>
    </>
  );
}

export default Home;
