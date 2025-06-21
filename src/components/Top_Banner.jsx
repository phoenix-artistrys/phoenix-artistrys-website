import { useEffect } from "react";

function Top_Banner({ Banner_Video, Video_Poster }) {
  // Pause the banner video when scrolling down, play when at top
  useEffect(() => {
    const handleScroll = () => {
      const video = document.getElementsByClassName("video_banner")[0];
      if (video) {
        if (window.scrollY > 500) {
          video.pause();
        } else {
          video.play();
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <video
      src={Banner_Video}
      poster={Video_Poster}
      autoPlay
      webkit-playsinline
      playsInline
      muted
      loop
      className="video_banner"
    ></video>
  );
}

export default Top_Banner;
