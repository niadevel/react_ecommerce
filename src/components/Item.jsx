import { Link } from "react-router-dom";
import Button from "./Button";
import "./item.css";

function Item(props) {
  const { price, title, text, img, id } = props;

  return (
    <div className="card">
      <img src={img} alt="product img" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div>
          <p className="card-price">$ {price}</p>
        </div>
        <Link to={`/item/${id}`}>
          <Button>Ver Detalle</Button>
        </Link>
      </div>
    </div>
  );
}

export default Item;

