// animations
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Music_Icons() {
  return (
    <div id="music_icons_container">
      <h2 className="center_text" tabIndex={0}>
        Platforms
      </h2>
      <div
        className="music_icons"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-bottom"
        data-aos-once="false"
      >
        <a href="https://www.youtube.com/@Phoenix_Artistrys">
          <img
            src="/music_icons/youtube.png"
            alt="YouTube Icon"
            className="music_img_link"
          />
        </a>

        <a href="https://soundcloud.com/phoenix_artistrys">
          <img
            src="/music_icons/sound_cloud.png"
            alt="SoundCloud Icon"
            className="music_img_link"
          />
        </a>

        <a href="https://open.spotify.com/artist/4a8QyUnauSLHpuJWgFTCYN">
          <img
            src="/music_icons/spotify.png"
            alt="Spotify Icon"
            className="music_img_link"
            id="spotify"
          />
        </a>

        <a href="https://music.apple.com/us/artist/phoenix-artistrys/1522101882">
          <img
            src="/music_icons/apple_music.svg"
            alt="Amazon Music Icon"
            className="music_img_link"
            id="apple_music"
          />
        </a>

        <a href="https://www.instagram.com/phoenix_artistrys/">
          <img
            src="/music_icons/insta.png"
            alt="Instagram Icon"
            className="music_img_link"
            id="insta"
          />
        </a>

        <a href="https://discord.gg/RNJqrR8B3u">
          <img
            src="/music_icons/discord.png"
            alt="Instagram Icon"
            className="music_img_link"
          />
        </a>
      </div>
    </div>
  );
}

export default Music_Icons;
