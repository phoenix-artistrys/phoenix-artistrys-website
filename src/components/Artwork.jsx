function Artwork({ phoenix_logo_large, blue_phoenix, audiophobia_clear, skremzy_blue, nwlogo }) {
  return (
    <div className="grid_container">
      <img
        src={blue_phoenix}
        alt="Volume 5 Artwork"
        className="artwork_large"
        id="blue_phoenix"
        onContextMenu={(e) => e.preventDefault()}
      />
       <img
        src={phoenix_logo_large}
        alt="Phoenix Artistrys Logo"
        className="artwork_large"
        onContextMenu={(e) => e.preventDefault()}
      />
      <img
        src={audiophobia_clear}
        alt="Audiophobia logo"
        className="artwork_large"
        id="audiophobia_clear"
        onContextMenu={(e) => e.preventDefault()}
      />
      <img
        src={skremzy_blue}
        alt="Blue Skremzy logo"
        className="artwork_large"
        id="skremzy_blue"
        onContextMenu={(e) => e.preventDefault()}
      />
      <img
        src={nwlogo}
        alt="Newave Oceans logo"
        className="artwork_large"
        id="nwlogo"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
}

export default Artwork;
