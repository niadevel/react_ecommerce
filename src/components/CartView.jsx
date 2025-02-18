import { useContext } from 'react';
import cartContext from '../context/cartContext';
import { createBuyOrder } from '../data/database';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import "sweetalert2";
import "sweetalert2-react-content";
import "./cartView.css"

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
          <div className="boxCart">
            <h3>{item.title}</h3>
            <p>Precio: ${item.price}</p>
            <p>Unidades: {item.count}</p>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
          </div>
          <hr />
        </div>
      ))}

      <h2 className="totalCart">Total: ${getTotalPrice()}</h2>

      <button className="clearCart" onClick={clearAllItems}>Vaciar mi carrito 🛒</button>

      <form className="formCart">
      <h2>Completa tus datos para terminar la compra 🛍</h2>

      <div>
        <label>Nombre</label>
        <input name="username" type="text" required onChange={onInputChange} />
      </div>

      <div>
        <label >Apellido</label>
        <input name="surname" type="text" required onChange={onInputChange} />
      </div>

      <div>
        <label>Teléfono</label>
        <input name="phone" type="number" required onChange={onInputChange} />
      </div>

      <div>
        <label>Email</label>
        <input name="email" type="email" required onChange={onInputChange} />
      </div>

      <div>
        <label>Dirección</label>
        <input name="adress" type="text" required onChange={onInputChange} />
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
        onClick={handleCheckout}>
        
        Realiza tu compra🛍
      </button>
    </form>

    </div>
  )
 }
}

export default CartView