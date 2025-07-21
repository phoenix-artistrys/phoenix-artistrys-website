// animations
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Sample_Packs() {
  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="block_background_dark block_padding block_faq"
      id="sample_packs"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="false"
    >
      <div className="flex_center sample_pack_container">
        <img
          src="/sample_packs/voltage.png"
          alt="Swamp Citae sample pack img"
          className="sample_pack_image"
          id="swamp"
          onContextMenu={handleContextMenu}
        />
        <img
          src="/sample_packs/angel.png"
          alt="ChillyFex Angel sample pack img"
          className="sample_pack_image"
          id="angel"
          onContextMenu={handleContextMenu}
        />
        <img
          src="/sample_packs/digital.png"
          alt="Swamp Citae Digital sample pack img"
          className="sample_pack_image"
          id="swamp"
          onContextMenu={handleContextMenu}
        />
        <img
          src="/sample_packs/giant.png"
          alt="ChillyFex Giant sample pack img"
          className="sample_pack_image"
          id="angel"
          onContextMenu={handleContextMenu}
        />
      </div>
      <h2 className="center_text" tabIndex={0}>Sample Packs</h2>
      <a
        href="https://sites.google.com/view/phoenix-sample-packs/free-downloads"
        className="hero_link blue_button_link"
      >
        Download
      </a>
    </div>
  );
}

export default Sample_Packs;
