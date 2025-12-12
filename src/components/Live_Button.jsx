function Live_Block() {
  return (
    <div
      className="block_background_dark block_padding block_faq"
      id="live_block"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-anchor-placement="top-bottom"
      data-aos-once="false"
    >
      <a href="https://m.twitch.tv/fireswept/home">
        <img
          src="/images/phoenix_dark_live.png"
          alt="Instagram Icon"
          className="music_img_link live_button"
        />
      </a>

      <a href="https://m.twitch.tv/fireswept/home" class="hero_link purple_button_link">
        Watch
      </a>

      <a href="https://frozenfoxrecordsllc.myshopify.com" class="hero_link dark_purple_button_link">
        Merch
      </a>
    </div>
  );
}

export default Live_Block;
