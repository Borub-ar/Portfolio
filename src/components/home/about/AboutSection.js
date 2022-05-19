import classes from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section>
      <h2 className={classes.hello}>Cześć<span className={classes.dot}>.</span></h2>
    </section>
  );
};

export default AboutSection;
