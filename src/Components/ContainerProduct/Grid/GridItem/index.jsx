import * as React from "react";
import { CartContext } from "../../../../contexts/CartContext";

const GridItem = ({ item }) => {
  const { addProduct } = React.useContext(CartContext);
  return (
    <li key={item.name}>
      <>
        {item.name}
        {item.price}
        {item.currency}
      </>
      <img src={`${item.image.path}`} />
      <button onClick={() => addProduct(item)}>add to cart</button>
    </li>
  );
};
export default GridItem;
