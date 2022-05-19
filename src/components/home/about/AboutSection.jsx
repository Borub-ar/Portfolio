import classes from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section>
      <h2 className={classes.hello}>
        Cześć<span className={classes.dot}>.</span>
      </h2>
      <p className={classes.about_me}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec
        ipsum lorem. Proin eget felis a lorem pulvinar imperdiet. Sed laoreet,
        arcu sed vulputate condimentum, urna mauris mattis sem, ut tempor lectus
        massa nec turpis. Nulla interdum tempus ipsum, ut efficitur turpis
        mollis lacinia. Praesent efficitur ex sapien, quis convallis neque
        mollis in. Phasellus nulla ex.
      </p>
    </section>
  );
};

export default AboutSection;
