import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";

function App() {
  const [cartIsShown, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </>
  );
}

export default App;
