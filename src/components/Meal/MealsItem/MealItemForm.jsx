import { useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amount, setAmount] = useState("1");

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmountNumber = +amount;

    if (
      amount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          value: amount,
          onChange: amountChangeHandler,
        }}
      />

      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
