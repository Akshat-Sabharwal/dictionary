import { Theme } from "../../context/Theme";
import { darkTheme, lightTheme } from "../../context/Theme.variables";
import "./Tag.css";
import { useContext } from "react";

export const Tag = ({ text }) => {
  const { theme } = useContext(Theme);
  const isDark = theme === "dark";

  return (
    <span
      className="tag-wrapper"
      style={{ color: isDark ? lightTheme.fontMain : darkTheme.fontMain }}
    >
      {text.charAt(0).toUpperCase() + text.slice(1)}
    </span>
  );
};
