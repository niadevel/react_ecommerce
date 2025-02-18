import { createContext, useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2";
import "sweetalert2-react-content"

const cartContext = createContext({cartItems: [] });

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function getTotalPrice() {
      let totalPrice = 0;

      cartItems.forEach((item) => {
        totalPrice += item.count * item.price;
      });
      return totalPrice;
    }

function addItem (itemInfo) {
  // const { id, title, imgUrl, count, price } =itemInfo;
  const isInCart = cartItems.some( item => item.id === itemInfo.id)
  const newCartState = [...cartItems]

  if (!isInCart){
  newCartState.push(itemInfo)
  }
  else {
    const indexInCart = cartItems.findIndex( item => item.id === itemInfo.id )
    newCartState[indexInCart].count += itemInfo.count;
  }
  setCartItems(newCartState);
}

  function countItemsInCart() {
    let total = 0;
    cartItems.forEach((item) => {
      total +=item.count;
    });
    return total;
  }

  function removeItem(id) {
    const newCartState = cartItems.filter((item) => item.id !== id)
    setCartItems(newCartState);
  }

  function clearAllItems() {
    setCartItems([])
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Tu carrito está vacío",
      showConfirmButton: false,
      timer: 2000
    });
  }
  
  return (
    <cartContext.Provider
      value={{
        cartItems,
        countItemsInCart,
        addItem,
        removeItem,
        clearAllItems,
        getTotalPrice,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export default cartContext;
