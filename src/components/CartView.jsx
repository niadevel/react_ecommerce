import { useContext } from 'react';
import cartContext from '../context/cartContext';
import { createBuyOrder } from '../data/database';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import "sweetalert2";
import "sweetalert2-react-content"

function realizarCompra() {
  setCartItems([])
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Tu compra fue realizada con éxito! <br> Tu cód de compra es: "
    + newOrderID ,
    html: htmlTicket,
    showConfirmButton: true,
    timer: 8000
  });
}


function CartView() {
  const { cartItems, removeItem, getTotalPrice, clearAllItems } = useContext(cartContext);
  

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
      phone: "",
      email: "",
      adress: ""
    })

    function onInputChange(evt){
      const inputName = evt.target.name;
      const newUserData = {...userData}
      newUserData[inputName] = evt.target.value
      setUserData(newUserData)
    }

    async function handleCheckout(evt){
      evt.preventDefault();

      const orderData = {
        buyer: {
          username: userData.username,
          surname: userData.surname,
          phone: userData.phone,
          email: userData.email,
          adress: userData.adress
        },
        items: cartItems,
        total: getTotalPrice(),
        date: new Date()
      }

      const newOrderID = await createBuyOrder(orderData);
      console.log("Compra realizada", newOrderID);
      console.log("order data", orderData);

      let htmlTicketArray = cartItems.map((cartItems) => (
      `
        <div key=${cartItems.id}>
          <div>
            <h3>${cartItems.title}</h3>
            <p>Precio: ${cartItems.price}</p>
            <p>Unidades: ${cartItems.count}</p>
          </div>
        </div>
      ` 
      ))

      let htmlTotal = 
        `
        <div totalTicket>
        <h3>Total: ${getTotalPrice()}</h3>
        </div>
        `

      let htmlDate =
        `
        <div htmlDate>
        <h3>Fecha: ${new Date()}</h3>
        </div>
        `

      let htmlTicket = htmlTicketArray.join(`<br>`)+htmlTotal+htmlDate

      console.log("htmlTicket", htmlTicket);
    
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Tu compra fue realizada con éxito! <br> Tu cód de compra es: "
        + newOrderID ,
        html: htmlTicket,
        showConfirmButton: true,
        timer: 8000
      });
    

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

      <h2>Total: ${getTotalPrice()}</h2>

      <button onClick={clearAllItems}>Vaciar mi carrito 🛒</button>

      <form>
      <h2>Completa tus datos para terminar la compra 🛍</h2>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Nombre</label>
        <input name="username" type="text" onChange={onInputChange} />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Apellido</label>
        <input name="surname" type="text" onChange={onInputChange} />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Teléfono</label>
        <input name="phone" type="text" onChange={onInputChange} />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Email</label>
        <input name="email" type="text" onChange={onInputChange} />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Dirección</label>
        <input name="adress" type="text" onChange={onInputChange} />
      </div>

      <button
        disabled={
          !(
            userData.username !== "" &&
            userData.surname !== "" &&
            userData.phone !== "" &&
            userData.email !== "" &&
            userData.adress !== ""
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