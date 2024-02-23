import { useContext } from "react";
import "./PartOfSpeech.css";
import { Theme } from "../../../../context/Theme";
import { darkTheme, lightTheme } from "../../../../context/Theme.variables";

export const PartOfSpeech = ({ partOfSpeech, definitions }) => {
  const { theme, toggleTheme } = useContext(Theme);
  const isDark = theme === "dark";

  return (
    <div className="partofspeech-container flex-left-column">
      <span className="header flex-left-row">
        <p>{partOfSpeech.charAt(0).toUpperCase() + partOfSpeech.slice(1)}</p>
        <hr />
      </span>
      <ul className="definitions flex-left-column">
        {definitions.map((item) => (
          <li>
            <span className="info flex-left-column">
              <p
                style={{
                  color: isDark ? lightTheme.fontMain : darkTheme.fontMain,
                }}
              >
                {item.meaning}
              </p>
              <p>{item.example}</p>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
