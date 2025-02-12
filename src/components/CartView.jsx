import { useContext } from 'react';
import cartContext from '../context/cartContext';
import { createBuyOrder } from '../data/database';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const { cartItems, removeItem, getTotalPrice, clearAllItems } = useContext(cartContext);

function CartView() {
  if (cartItems.length === 0) {
    
    return (
    <div className="cartEmptyView">
      <h1>Tu carrito está vacío 🛒</h1>
      <Link to ="/"><button>Quiero comprar 🛍️</button></Link>
    </div>
    )
  }
  else {
   
    const [userData, setUserData] = useState({
      username: "",
      surname: "",
      age: ""
    })

    function onInputChange(evt){
      const inputName = evt.target.name;
      const newUserData = {...userData}
      newUserData[inputName] = evt.target.value
      setUserData(newUserData)
    }


    // const { cartItems, removeItem, getTotalPrice, clearAllItems } = useContext(cartContext);
    
    async function handleCheckout(evt){
      evt.preventDefault();

      const orderData = {
        buyer: {
          username: userData.username,
          surname: userData.surname,
          age: userData.age
        },
        items: cartItems,
        total: getTotalPrice(),
        date: new Date()
      }

      const newOrderID = await createBuyOrder(orderData);
      console.log("Compra realizada", newOrderID);
    }

  return (
    <div>
        <h1>Tu carrito</h1> 
      {cartItems.map((item) => (
        <div key={item.id}>
          <div>
            <h3>{item.title}</h3>
            <p>Precio: ${item.price}</p>
            <p>Unidades: {item.count}</p>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
          </div>
          <hr />
        </div>
      ))}

      <button onClick={clearAllItems}>Vaciar mi carrito 🛒</button>

      <form>
      <h2>Completa tus datos para completar la compra🛍</h2>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Nombre</label>
        <input name="username" type="text" onChange={onInputChange} />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Apellido</label>
        <input name="surname" type="text" onChange={onInputChange} />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Edad</label>
        <input name="age" type="text" onChange={onInputChange} />
      </div>

      <button
        disabled={
          !(
            userData.username !== "" &&
            userData.surname !== "" &&
            userData.age !== ""
          )
        }
        onClick={handleCheckout}
      >
        Realiza tu compra🛍
      </button>
    </form>

    </div>
  )
 }
}

export default CartView