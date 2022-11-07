import classes from "./SectionHeader.module.css";

const SectionHeader = (props) => {
  return (
    <h2 className={classes.header}>
      {props.children}
      <span className={classes.dot}>.</span>
    </h2>
  );
};

export default SectionHeader;
