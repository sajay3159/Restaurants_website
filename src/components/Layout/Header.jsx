import { Fragment } from "react";
import mealsItem from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsItem} alt="A table full of delicious food!" />
        <div className={classes.summary}>
          <h1>Delicious Food, Delivered to you</h1>
          <p>
            Choose favorite meal from our broad selection of avaiable meals and
            enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
