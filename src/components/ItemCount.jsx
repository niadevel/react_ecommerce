import { useState } from "react";
import "./itemCount.css";

function ItemCount(props) {
  let [count, setCount] = useState(1);

  const handleAdd = () => {
    if (count === props.max) return;
    console.log("Suma");
    setCount(count + 1);
    // count = count +1
  };

  const handleSubstract = () => {
    // TODO: Antes de modificar el estado -> VALIDAR que no descienda de un min (1)
    console.log("Resta");
    setCount(count - 1);
  };

  function handleClick() {
    props.onSubmitCount(count);
  }

  return (
    <div>
      <div className="container-count">
        <button className="button-count" onClick={handleSubstract}>-</button>
        <span className="number-count">{count}</span>
        <button className="button-count" onClick={handleAdd}>+</button>
      </div>
      <div>
        <button className="button-addToCart" onClick={handleClick}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ItemCount;
