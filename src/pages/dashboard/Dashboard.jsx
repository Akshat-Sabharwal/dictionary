import "./Dashboard.css";
import searchIconLight from "../../assets/search-icon-light.png";
import searchIconDark from "../../assets/search-icon-dark.png";
import searchImage from "../../assets/search.png";
import { Header } from "../../components/Header/Header";
import { Button } from "../../components/Button/Button";
import { useContext, useState } from "react";
import { Theme } from "../../context/Theme";
import { lightTheme, darkTheme } from "../../context/Theme.variables";

export const Dashboard = () => {
  const { theme } = useContext(Theme);
  const [wordInput, setWordInput] = useState("");
  const [wordData, setWordData] = useState(null);
  const isDark = theme === "dark";

  const getData = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return "Error";
        }
      })
      .then((data) => setWordData(data));
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <body
      style={{
        backgroundColor: isDark ? darkTheme.bgMain : lightTheme.bgMain,
      }}
    >
      <header>
        <Header />
      </header>
      <main className="dashboard flex-center-column">
        {wordData === null ? (
          <div className="starter flex-center-column">
            <img src={searchImage} className="placeholder-image" />
            <p>You are a click away from enhancing your vocabulary</p>
          </div>
        ) : wordData === "Error" ? (
          <div className="error flex-center-column">
            <img src={searchImage} className="placeholder-image" />
            <p>Word not found</p>
          </div>
        ) : (
          <section>{JSON.stringify(wordData)}</section>
        )}
      </main>
      <form onSubmit={handleSubmission} className="word-form flex-between-row">
        <input
          type="text"
          className="word-input"
          placeholder="Search"
          value={wordInput}
          onChange={(e) => setWordInput(e.target.value)}
          style={{
            backgroundColor: isDark ? lightTheme.bgMain : darkTheme.bgMain,
            color: isDark ? lightTheme.fontMain : darkTheme.fontMain,
            // boxShadow: isDark
            //   ? "-3rem 0rem 0.8rem -0.3rem var(--bg-dark) inset"
            //   : "-3rem 0rem 0.8rem -0.3rem var(--bg-light) inset",
          }}
        />
        {isDark ? (
          <Button image={searchIconDark} invert={true} />
        ) : (
          <Button image={searchIconLight} invert={true} />
        )}
      </form>
    </body>
  );
};
