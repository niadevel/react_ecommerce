import { createContext, useState } from "react";


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

  //copiando objeto dentro del array
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


  // function addItem({price, id, title, imgUrl, count}){
  //   const copyCartItems = [...cartItems];
  //   copyCartItems.push({
  //     id: id,
  //     title: title,
  //     imgUrl: imgUrl,
  //     count: count,
  //     price: price,
  //   });
  //   setCartItems(copyCartItems);

  // }

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
