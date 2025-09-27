import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      {"Sushi"}
      <div className={classes.total}>
        <h2>Total Amount</h2>
        <h2>35.62</h2>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
