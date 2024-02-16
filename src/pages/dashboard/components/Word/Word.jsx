import "./Word.css";
import { Button } from "../../../../components/Button/Button";
import { Tag } from "../../../../components/Tag/Tag";
import speaker from "../../../../assets/speak.png";
import { PartOfSpeech } from "../PartOfSpeech/PartOfSpeech";
import { Theme } from "../../../../context/Theme";
import { useContext } from "react";
import { lightTheme, darkTheme } from "../../../../context/Theme.variables";

export const Word = ({ word, phonetic, audio, definitions, synonyms }) => {
  const { theme, toggleTheme } = useContext(Theme);
  const isDark = theme === "dark";

  return (
    <div
      className="word-container flex-left-column"
      style={{ backgroundColor: isDark ? lightTheme.bgMain : darkTheme.bgMain }}
    >
      <div className="basic-info flex-between-row">
        <span className="word-info flex-left-column">
          <p
            style={{ color: isDark ? lightTheme.fontMain : darkTheme.fontMain }}
          >
            {word.charAt(0).toUpperCase() + word.slice(1)}
          </p>
          <p>{phonetic}</p>
        </span>
        <Button
          image={speaker}
          onClick={() => new Audio(audio).play()}
          style={{ backgroundColor: "var(--bg-light)" }}
        />
      </div>
      <div className="definitions flex-left-column">
        {definitions.map((item) => (
          <PartOfSpeech
            partOfSpeech={item.partOfSpeech}
            definitions={item.definitions}
          />
        ))}
      </div>
      <div className="synonyms">
        {synonyms.map((item) => (
          <Tag text={item} />
        ))}
      </div>
    </div>
  );
};
