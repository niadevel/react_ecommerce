import ItemCount from "./ItemCount";
import "./itemDetail.css";
import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function ItemDetail(props) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const { price, title, description, imgUrl, id, stock } = props;
  const {addItem} = useContext(cartContext);


  function onSubmitCount(count) {
    console.log(`Agregaste ${count} unidades al carrito`);
    addItem({id, price, title, count, imgUrl});
    setIsAddedToCart(true);
  }

  return (
    <div className="card-detail">
      <img  src={imgUrl} alt="product img" />
      <div className="card-body-detail">
        <h3 className="card-title-detail">  {title}</h3>
        <div>
          <p className="card-price-detail">$ {price}</p>
        </div>
        <p className="card-descrip-detail">{description}</p>
      </div>
      <div className="card-count-detail">
        {
          isAddedToCart 
           ? <Link to="/cart"> <button >View My Cart</button> </Link>
           : <ItemCount onSubmitCount={onSubmitCount} max={stock} />
      }
      </div>
    </div>
  );
}

export default ItemDetail;
