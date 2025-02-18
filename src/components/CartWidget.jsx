import { useContext } from "react";
import cartContext from "../context/cartContext";

export default function CartWidget() {
  const context = useContext(cartContext);
  console.log("Context--->", context);

  return (
    <div className="cart-icon">
      🛒
      {
        context.countItemsInCart() > 0 
          && ( <span className="cart-count">{context.countItemsInCart()} </span> )
      }
    </div>
  );
}
