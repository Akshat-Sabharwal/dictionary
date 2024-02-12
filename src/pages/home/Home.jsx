import "./Home.css";
import { useContext } from "react";
import lightMode from "../../assets/sun.png";
import darkMode from "../../assets/moon.png";
import example from "../../assets/example.png";
import network from "../../assets/network.png";
import list from "../../assets/list.png";
import books from "../../assets/books.png";
import github from "../../assets/github.png";
import vercel from "../../assets/vercel.png";
import rightArrow from "../../assets/right-arrow.png";
import { Button } from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";
import { Theme } from "../../context/Theme";
import { Footer } from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { theme, toggleTheme } = useContext(Theme);
  const navigate = useNavigate();
  const isDark = theme === "dark";
  return (
    <body
      style={{
        backgroundColor: isDark ? "var(--bg-dark)" : "var(--bg-light)",
      }}
    >
      <header className="header flex-between-row">
        <Button image={rightArrow} />
        <span className="flex-evenly-row">
          <Button onClick={toggleTheme} image={isDark ? lightMode : darkMode} />
          <Button
            image={github}
            onClick={() =>
              (window.location.href =
                "https://github.com/Akshat-Sabharwal/dictionary")
            }
          />
        </span>
      </header>
      <main className="main">
        <div className="landing">
          <p className="title">Lexiko</p>
          <p className="sub-title">An English dictionary worth giving a try!</p>
        </div>
        <div className="bg flex-center-column">
          <div className="buttons flex-between-row">
            <Button
              text="Get Started"
              invert={true}
              onClick={() => navigate("/dashboard")}
            />
            <Button text="Learn More" />
          </div>
          <hr />
          <div className="cards flex-evenly-row">
            <Card
              image={list}
              text="Every word from the English language served to you"
            />
            <Card
              image={network}
              text="Reinforced with phonetics and correct pronunciations"
            />
            <Card
              image={example}
              text="Usage of the word as different of parts speech with examples "
            />
          </div>
          <hr />
          <div className="hero flex-between-row">
            <article className="flex-left-column">
              <p className="title">Have a vocab on steroids!</p>
              <p className="description">
                Every word, every synonym, every example you need, all at one
                place to boost your vocabulary
              </p>
              <Button
                text="Get wordin'"
                invert={true}
                style={{ fontSize: "1.8rem", padding: "1rem 2rem" }}
                onClick={() => navigate("/dashboard")}
              />
            </article>
            <Card image={books} className="books" />
          </div>
          <Footer
            images={[github, vercel]}
            style={{ width: "91.5%", bottom: "0", marginTop: "11rem" }}
          />
        </div>
      </main>
    </body>
  );
};
