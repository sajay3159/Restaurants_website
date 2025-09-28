import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberofItemsInCart = cartCtx.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClickCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberofItemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
