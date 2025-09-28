import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <li key={item.id}>
            {item.name} x {item.amount} - ${item.price}
          </li>
        );
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <h2>Total Amount</h2>
        <h2>{totalAmount}</h2>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
