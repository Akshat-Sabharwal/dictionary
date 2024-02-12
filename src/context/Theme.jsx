import { createContext, useState } from "react";
import { lightTheme, darkTheme } from "./Theme.variables";

export const Theme = createContext("dark");

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <Theme.Provider value={{ lightTheme, darkTheme, theme, toggleTheme }}>
      {children}
    </Theme.Provider>
  );
};
