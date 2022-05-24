import SectionHeader from "../../utilities/SectionHeader";
import classes from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section className={classes.about}>
      <SectionHeader>Hello</SectionHeader>
      
      <p className={classes.about_me}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec
        ipsum lorem. Proin eget felis a lorem pulvinar imperdiet. Sed laoreet,
        arcu sed vulputate condimentum, urna mauris mattis sem, ut tempor lectus
        massa nec turpis. Nulla interdum tempus ipsum, ut efficitur turpis
        mollis lacinia. Praesent efficitur ex sapien, quis convallis neque
        mollis in. Phasellus nulla ex.
      </p>

      <p className={classes.sub_paragraph}>Poszukuje pracy jako FrontEnd Developer.</p>

      <p className={classes.more}>Więcej</p>
    </section>
  );
};

export default AboutSection;
