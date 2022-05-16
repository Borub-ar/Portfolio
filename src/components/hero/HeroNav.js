import classes from "./HeroNav.module.css";

const HeroNav = () => {
  return (
    <div>
      <p className={classes.hero_nav}>
        O MNIE <span className={classes.slash}>/</span> PROJEKTY
        <span className={classes.slash}>/</span> KONTAKT
      </p>
    </div>
  );
};

export default HeroNav;
