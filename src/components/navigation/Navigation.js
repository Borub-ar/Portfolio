import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <input type="checkbox" class={classes.menu_checkbox} id="menu_checkbox" />
      <label for="menu_checkbox">
        <div></div>
        <div></div>
        <div></div>
      </label>
    </nav>
  );
};

export default Navigation;
