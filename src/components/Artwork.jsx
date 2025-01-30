function Artwork({ phoenix_logo_large }) {
  return (
    <div className="flex_row">
      <img
        src={phoenix_logo_large}
        alt="Phoenix Artistrys Logo"
        className="phoenix_logo_large"
      />
    </div>
  );
}

export default Artwork;
