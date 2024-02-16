import "./Home.css";
import { useContext } from "react";
import lightMode from "../../assets/sun.png";
import darkMode from "../../assets/moon.png";
import example from "../../assets/example.png";
import network from "../../assets/network.png";
import list from "../../assets/list.png";
import books from "../../assets/books.png";
import github from "../../assets/github.png";
import rightArrow from "../../assets/right-arrow.png";
import { lightTheme, darkTheme } from "../../context/Theme.variables";
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
        backgroundColor: isDark ? darkTheme.bgMain : lightTheme.bgMain,
      }}
      className="homepage"
    >
      <header className="header flex-between-row">
        <Button
          image={rightArrow}
          style={{ backgroundColor: lightTheme.bgMain }}
          onClick={() => navigate("/dashboard")}
        />
        <span className="flex-evenly-row">
          <Button
            onClick={toggleTheme}
            image={isDark ? lightMode : darkMode}
            style={{ backgroundColor: lightTheme.bgMain }}
          />
          <Button
            image={github}
            onClick={() =>
              (window.location.href =
                "https://github.com/Akshat-Sabharwal/dictionary")
            }
            style={{ backgroundColor: lightTheme.bgMain }}
          />
        </span>
      </header>
      <main className="main">
        <div className="landing">
          <p
            className="title"
            style={{ color: isDark ? darkTheme.fontMain : lightTheme.fontMain }}
          >
            Lexiko
          </p>
          <p className="sub-title">An English dictionary worth giving a try!</p>
        </div>
        <div className="bg flex-center-column">
          <div className="buttons flex-between-row">
            <Button text="Get Started" onClick={() => navigate("/dashboard")} />
            <Button text="Learn More" invert={true} />
          </div>
          <hr />
          <div className="cards">
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
              text="Usage of the word as different parts of speech with examples "
            />
          </div>
          <hr />
          <div className="hero flex-between-row">
            <article className="flex-left-column">
              <p
                className="title"
                style={{
                  color: isDark ? darkTheme.fontMain : lightTheme.fontMain,
                }}
              >
                Have a vocab on steroids!
              </p>
              <p className="description">
                Every word, every synonym, every example you need, all at one
                place to boost your vocabulary
              </p>
              <Button
                text="Get wordin'"
                style={{
                  fontSize: "1.8rem",
                  padding: "1rem 2rem",
                  backgroundColor: "var(--bg-dark)",
                  color: "var(--font-light)",
                }}
                onClick={() => navigate("/dashboard")}
              />
            </article>
            <div className="books">
              <Card image={books} />
            </div>
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
      </main>
    </body>
  );
};
