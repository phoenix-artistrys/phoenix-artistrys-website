function Top_Banner({ Banner_Video }) {
  return (
    <video
      src={Banner_Video}
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
