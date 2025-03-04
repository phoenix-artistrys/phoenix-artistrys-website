// react router
import { Link } from "react-router-dom";

// animations
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Faq_Block() {
  return (
    <div
      className="block_background_white block_background_dark block_padding"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-anchor-placement="top-bottom"
      data-aos-once="true"
    >
      <h2>FAQ</h2>
      <Link
        to="/questions"
        className="hero_link blue_button_link"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Visit
      </Link>
    </div>
  );
}

export default Faq_Block;
