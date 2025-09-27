import classes from "./MealSummary.module.css";

const MealSummary = () => {
  return (
    <div className={classes.summary}>
      <h1>Delicious Food, Delivered to you</h1>
      <p>
        Choose favorite meal from our broad selection of avaiable meals and
        enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </div>
  );
};

export default MealSummary;
