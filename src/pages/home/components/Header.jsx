import rightIcon from "../../../assets/right-arrow.png";
import githubIcon from "../../../assets/github.png";
import lightIcon from "../../../assets/sun.png";

export const Header = () => {
  return (
    <header>
      <span>
        <img src={rightIcon} />
      </span>
      <span>
        <span>
          <img src={githubIcon} />
        </span>
        <span>
          <img src={lightIcon} />
        </span>
      </span>
    </header>
  );
};
