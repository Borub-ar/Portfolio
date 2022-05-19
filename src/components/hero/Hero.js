import classes from "./Hero.module.css";
import HeroNav from "./HeroNav";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <h1 className={classes.title}>Kacper Barabasz</h1>
      <p className={classes.sub_header}>Junior Front-end Developer</p>
      <HeroNav />
    </section>
  );
};

export default Hero;
