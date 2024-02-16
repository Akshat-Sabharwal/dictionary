import "./Footer.css";
import github from "../../assets/github.png";
import vercel from "../../assets/vercel.png";

export const Footer = ({ style }) => {
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
            <img src={github} />
          </a>
          <a href="https://lexiko.vercel.app" className="link-box">
            <img src={vercel} />
          </a>
        </div>
      </div>
    </div>
  );
};
