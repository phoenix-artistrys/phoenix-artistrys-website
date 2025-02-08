import { Link } from "react-router-dom";

function Faq_Block() {
  return (
    <div className="block_background_white block_background_dark block_padding">
      <h2>FAQ</h2>
      <Link
        to="/questions"
        className="hero_link faq_link"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Visit
      </Link>
    </div>
  );
}

export default Faq_Block;
