import * as React from "react";
import { CartContext } from "../../../../contexts/CartContext";
import "./styles.scss";

const GridItem = ({ item, className }) => {
  const { addProduct } = React.useContext(CartContext);
  return (
    <li className={className} key={item.name}>
      <img src={`${item.image.path}`} alt="" className="product-image" />
      <div>
        <p>{item.name}</p>
        <p>{`${item.price} ${item.currency}`}</p>
      </div>
      <button onClick={() => addProduct(item)}>add to cart</button>
    </li>
  );
};
export default GridItem;
