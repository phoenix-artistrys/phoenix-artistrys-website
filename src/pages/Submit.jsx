import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Arrow_Down from "../components/Arrow_down";
import link_to from "../components/Arrow_down";
import Top_Banner from "../components/Top_Banner";
import Banner_Video from "/phoenix_hero_sub.mp4"; // Import the banner video

function Submit() {
  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      header.style.display = "none";
    }
    return () => {
      if (header) {
        header.style.display = "";
      }
    };
  }, []);

  return (
    <>
      <Top_Banner Banner_Video={Banner_Video} />
      <main>
        {/* Banner */}
        <section className="banner_content">
          <h1 className="hero_title">Submission</h1>
          <div id="hero_button_div">
            <Link
              to="/"
              className="hero_link call_to_action"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Home
            </Link>
          </div>
          <Arrow_Down to={link_to} />
        </section>

        {/* Page Body */}
        <section className="section flex_center" id="phoenix_main">
          <h1 id="submit_header">Submit Your Music</h1>
          {/* Submission form */}
          <form
            name="submit"
            // action="/pages/Success.jsx"
            method="POST"
            netlify-honeypot="bot-field"
            // data-netlify-recaptcha="true"
            data-netlify="true"
            className="form_base"
          >
            {/* artist name */}
            <p>
              <label className="label_base">
                Artist Name:{" "}
                <input
                  type="text"
                  name="name"
                  className="input_base"
                  required
                />
              </label>
            </p>
            {/* release name */}
            <p>
              <label className="label_base">
                Release Name:{" "}
                <input
                  type="text"
                  name="release_name"
                  className="input_base"
                  required
                />
              </label>
            </p>
            {/* release type */}
            <p>
              <label className="label_base">
                Release Type:{" "}
                <select name="release_type" className="input_base" required>
                  <option value="" selected disabled>
                    Select{" "}
                  </option>
                  <option value="single">Single</option>
                  <option value="ab">A&#47;B</option>
                  <option value="ep">EP</option>
                  <option value="lp">LP</option>
                  <option value="album">Album</option>
                </select>
              </label>
            </p>
            {/* genre */}
            <p>
              <label className="label_base">
                Genre:{" "}
                <select name="genre" className="input_base" required>
                  <option value="" selected disabled>
                    Select{" "}
                  </option>
                  <option value="dubstep">Dubstep</option>
                  <option value="dnb">Drum & Bass</option>
                  <option value="future_bass">Future Bass</option>
                  <option value="house">House</option>
                  <option value="trance">Trance</option>
                  <option value="techno">Techno</option>
                  <option value="chillout">Chillout</option>
                  <option value="pop">Pop</option>
                  <option value="cinematic">Cinematic</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </p>
            {/* genre if other */}
            <p>
              <label className="label_base">
                Other:{" "}
                <input
                  type="text"
                  name="other"
                  placeholder="e.g. Vaperwave"
                  className="input_base other_description"
                ></input>
              </label>
            </p>
            <p>
              <label className="label_base">
                Lyrics:{" "}
                <select name="lyrics" className="input_base" required>
                  <option value="" selected disabled>
                    Select{" "}
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </p>
            {/* release demo */}
            <p>
              <label className="label_base">
                Demo Link:{" "}
                <input
                  type="text"
                  name="audio_demo_link"
                  className="input_base"
                  placeholder="SoundCloud & WeTransfer ONLY"
                  required
                />
              </label>
            </p>
            {/* lyric terms and conditions - hidden before click */}
            <div className="lyric_terms">
              <article className="form_text_container">
                <p className="form_text left_alight">
                  Phoenix Artistrys{" "}
                  <span className="underline bold red">
                    does not accept tracks with explicit lyrics.
                  </span>{" "}
                </p>
              </article>
              <p>
                <label className="form_text glow">
                  <input type="checkbox" name="lyrics" required /> I Accept
                </label>
              </p>
            </div>
            {/* revenue info */}
            <article className="form_text_container">
              <p className="form_text">
                Phoenix Artistrys offers a{" "}
                <span className="underline bold">60/40 revenue split</span>{" "}
                &#x28;60% artists, 40% distributor&#x29;, we are open to
                negotiation on these terms.
              </p>
            </article>
            {/* terms and conditions checkbox */}
            <p>
              <label className="form_text glow">
                <input type="checkbox" name="revenue" required /> I Understand
              </label>
            </p>
            {/* agreements */}
            <article className="form_text_container">
              <p className="form_text">
                Phoenix Artistrys{" "}
                <span className="underline">
                  will distribute accepted tracks to major platforms.
                </span>{" "}
              </p>
            </article>
            {/* terms and conditions checkbox */}
            <p>
              <label className="form_text glow">
                <input type="checkbox" name="terms" required /> I Accept
              </label>
            </p>
            <article className="form_text_container">
              <p className="form_text">
                Further details can be found in our{" "}
                <a
                  className="blue_link"
                  href="https://sites.google.com/view/submit-to-phoenix/home"
                >
                  Terms & Conditions
                </a>
              </p>
            </article>
            {/* submit button */}
            <p>
              <button
                type="submit"
                className="hero_link call_to_action music_submit"
              >
                Submit
              </button>
            </p>
          </form>
        </section>
      </main>
    </>
  );
}

export default Submit;
