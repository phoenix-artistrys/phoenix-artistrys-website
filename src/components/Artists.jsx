// animations
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Artists() {
  return (
    <div
      className="block_background_dark block_artists"
      id="artists"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-anchor-placement="top-bottom"
      data-aos-once="false"
    >
      <h2 tabIndex={0}>Artists</h2>
      <a
        href="https://sites.google.com/view/phoenixartistrys-artists/artists"
        className="hero_link blue_button_link"
      >
        Discover
      </a>
    </div>
  );
}

export default Artists;
