import React, { useState } from "react";
import { Link } from "react-router-dom";
import Arrow_Down from "../components/Arrow_down";
import link_to from "../components/Arrow_down";

function Submit() {
  return (
    <main>
      {/* Banner */}
      <section className="banner_content">
        <h2 className="hero_title">Submission</h2>
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
      <section className="section" id="phoenix_main">
        <h1>Submit Your Music</h1>
        <form
          name="submit"
          // action="/pages/Success.jsx"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
          data-netlify="true"
        >
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Your Role:{" "}
              <select name="role[]">
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit" className="hero_link call_to_action">
              Submit
            </button>
          </p>
        </form>
      </section>
    </main>
  );
}

export default Submit;
