import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import classes from "./Header.module.css";

import Navigation from "../navigation/Navigation";

const Header = () => {
  return (
    <header className={classes.header}>
      <Navigation />
      <div  className={classes.icons_container}>
        <FontAwesomeIcon className={classes.icon} icon={faLinkedin} size="2x" />
        <FontAwesomeIcon className={classes.icon} icon={faGithub} size="2x" />
      </div>
    </header>
  );
};

export default Header;
