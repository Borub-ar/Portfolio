import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <input type="checkbox" class={classes.menu_checkbox} id="menu_checkbox" />
      <label for="menu_checkbox">
        <div></div>
        <div></div>
        <div></div>
      </label>
    </div>
  );
};

export default Navigation;
