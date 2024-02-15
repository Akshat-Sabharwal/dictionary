import { useContext } from "react";
import { Theme } from "../../context/Theme";
import "./Button.css";

export const Button = ({ image, text, invert, square, onClick, style }) => {
  const { lightTheme, darkTheme, theme } = useContext(Theme);
  const isDark = theme === "dark";

  return (
    <>
      <button
        style={{
          backgroundColor: invert
            ? isDark
              ? lightTheme.bgMain
              : darkTheme.bgMain
            : isDark
            ? darkTheme.bgMain
            : lightTheme.bgMain,
          color: invert
            ? isDark
              ? lightTheme.fontMain
              : darkTheme.fontMain
            : isDark
            ? darkTheme.fontMain
            : lightTheme.fontMain,
          ...style,
        }}
        onClick={onClick}
      >
        {image === undefined ? text : <img src={image} />}
      </button>
    </>
  );
};
