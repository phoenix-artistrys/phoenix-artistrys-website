// COPYRIGHT 2025 TANNER MARSH, NAIT WELSH & AIDAN YIP ALL RIGHTS RESERVED

// import react state
import React, { useState } from "react";

// react router
import { Link } from "react-router-dom";

// import { useEffect } from "react";

//components
import Arrow_Down from "../components/Arrow_Down";
import link_to from "../components/Arrow_Down";

// header components
import Header from "../components/Header";

// banner video
import Banner_Video from "/video/phoenix_hero_sub.mp4"; // Import the banner video
import Top_Banner from "../components/Top_Banner";

function Submit() {
  // useEffect(() => {
  //   const header = document.querySelector("header");
  //   if (header) {
  //     header.style.display = "none";
  //   }
  //   return () => {
  //     if (header) {
  //       header.style.display = "";
  //     }
  //   };
  // }, []);

  const [formData, setFormData] = useState({
    name: "",
    release_name: "",
    release_type: "",
    genre: "",
    other: "",
    has_lyrics: "",
    audio_demo_link: "",
    email: "",
    lyrics_checkbox: false,
    revenue_checkbox: false,
    terms_checkbox: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <>
      <Header navlink="/" navlink_text="Home" />
      <Top_Banner Banner_Video={Banner_Video} />
      <main>
        {/* Banner */}
        <section className="banner_content lighter_filter" id="submit_banner">
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
          <img
            src="/images/envelope_no_shadow.png"
            alt="Envelope image"
            className="mail_img"
            onContextMenu={(e) => e.preventDefault()}
          />
          <h1 id="submit_header">Submit Your Music</h1>
          {/* Submission form */}
          <form
            name="submit"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            className="form_base"
            onChange={handleChange}
          >
            <input type="hidden" name="form-name" value="submit" />

            {/* artist name */}
            <p className="input_container">
              <label className="label_base">
                Artist Name{" "}
                <input
                  type="text"
                  name="name"
                  className="input_base"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
            </p>

            {/* release name */}
            <p className="input_container">
              <label className="label_base">
                Release Name
                <input
                  type="text"
                  name="release_name"
                  className="input_base"
                  value={formData.release_name}
                  onChange={handleChange}
                  required
                />
              </label>
            </p>

            {/* release type */}
            <p className="input_container">
              <label className="label_base">
                Release Type{" "}
                <select
                  name="release_type"
                  className="input_base"
                  value={formData.release_type}
                  onChange={handleChange}
                  required
                >
                  <option value="" defaultValue disabled>
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
            <p className="input_container">
              <label className="label_base">
                Genre{" "}
                <select
                  name="genre"
                  className="input_base"
                  value={formData.genre}
                  onChange={handleChange}
                  required
                >
                  <option value="" defaultValue disabled>
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
            <p className="input_container">
              <label className="label_base">
                Other{" "}
                <input
                  type="text"
                  name="other"
                  placeholder="e.g. Vaperwave"
                  className="input_base other_description"
                  value={formData.other}
                  onChange={handleChange}
                ></input>
              </label>
            </p>
            <p className="input_container">
              <label className="label_base">
                Lyrics{" "}
                <select
                  name="has_lyrics"
                  className="input_base"
                  value={formData.has_lyrics}
                  onChange={handleChange}
                  required
                >
                  <option value="" defaultValue disabled>
                    Select{" "}
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </p>

            {/* release demo */}
            <p className="input_container">
              <label className="label_base">
                Demo Link{" "}
                <input
                  type="text"
                  name="audio_demo_link"
                  className="input_base"
                  placeholder="SoundCloud & WeTransfer ONLY"
                  value={formData.audio_demo_link}
                  onChange={handleChange}
                  required
                />
              </label>
            </p>

            {/* email */}
            <p className="input_container">
              <label className="label_base">
                Email{" "}
                <input
                  type="email"
                  name="email"
                  className="input_base"
                  value={formData.email}
                  onChange={handleChange}
                  title="Please enter a valid email address"
                  required
                />
              </label>
            </p>

            {/* lyric terms and conditions - hidden before click */}
            <fieldset>
              <article className="form_text_container no_border">
                <p className="form_text left_alight">
                  Phoenix Artistrys{" "}
                  <span className="underline bold red">
                    does not accept tracks with explicit lyrics.
                  </span>{" "}
                </p>
              </article>
              <p>
                <label className="form_text glow">
                  <input
                    type="checkbox"
                    name="lyrics_checkbox"
                    checked={formData.lyrics_checkbox}
                    onChange={handleChange}
                    required
                  />{" "}
                  I Accept
                </label>
              </p>

              {/* revenue info */}
              <article className="form_text_container">
                <p className="form_text">
                  Phoenix Artistrys offers a{" "}
                  <span className="underline bold">60/40 revenue split</span>{" "}
                  &#x28;60% artists, 40% label&#x29;, we are open to negotiation
                  on these terms.
                </p>
              </article>

              {/* terms and conditions checkbox */}
              <p>
                <label className="form_text glow">
                  <input
                    type="checkbox"
                    name="revenue_checkbox"
                    checked={formData.revenue_checkbox}
                    onChange={handleChange}
                    required
                  />{" "}
                  I Understand
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
                  <input
                    type="checkbox"
                    name="terms_checkbox"
                    checked={formData.terms_checkbox}
                    onChange={handleChange}
                    required
                  />{" "}
                  I Accept
                </label>
              </p>
              <article className="form_text_container">
                <p className="form_text">
                  Further details can be found in our{" "}
                  <a
                    className="blue_link"
                    href="https://sites.google.com/view/submit-to-phoenix/home"
                  >
                    Terms & Conditions{" "}
                  </a>
                  or{" "}
                  <Link to="/questions#faq_banner" className="blue_link">
                    FAQ
                  </Link>
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
            </fieldset>
          </form>
        </section>
      </main>
    </>
  );
}

export default Submit;
