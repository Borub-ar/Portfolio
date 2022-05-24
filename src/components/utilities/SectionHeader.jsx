import classes from "./SectionHeader.module.css";

const SectionHeader = (props) => {
  return (
    <h1 className={classes.header}>
      {props.children}
      <span className={classes.dot}>.</span>
    </h1>
  );
};

export default SectionHeader;
