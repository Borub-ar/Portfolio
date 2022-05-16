import classes from "./Header.module.css";

import Navigation from "../navigation/Navigation";

const Header = () => {
  return (
    <div className={classes.header}>
      <Navigation />
      <p>GitHub, LinkIn</p>
    </div>
  );
};

export default Header;
