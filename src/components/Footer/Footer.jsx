import "./Footer.css";

export const Footer = ({ images, style }) => {
  return (
    <div className="footer-div flex-row" style={{ ...style }}>
      <p className="logo">Lexiko</p>
      <div className="contents flex-column">
        <p>Made possible by Dictionary API</p>
        <div className="link-container flex-row">
          <a
            href="https://github.com/Akshat-Sabharwal/dictionary"
            className="link-box"
          >
            <img src={images[0]} />
          </a>
          <a href="https://lexiko.vercel.app" className="link-box">
            <img src={images[1]} />
          </a>
        </div>
      </div>
    </div>
  );
};
