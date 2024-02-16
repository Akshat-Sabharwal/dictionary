import "./Header.css";
import { Theme } from "../../context/Theme";
import { Button } from "../Button/Button";
import { useContext } from "react";
import { lightTheme, darkTheme } from "../../context/Theme.variables";
import github from "../../assets/github.png";
import lightMode from "../../assets/sun.png";
import darkMode from "../../assets/moon.png";

export const Header = () => {
  const { theme, toggleTheme } = useContext(Theme);
  const isDark = theme === "dark";
  return (
    <div className="dashboard-header flex-between-row">
      <p
        className="dashboard-logo"
        style={{ color: isDark ? darkTheme.fontMain : lightTheme.fontMain }}
      >
        Lexiko
      </p>
      <span className="dashboard-buttons flex-end-row">
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
    </div>
  );
};
