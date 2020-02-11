import * as React from "react";
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
  const { cart } = React.useContext(CartContext);
  return (
    <div>
      {cart.map(item => (
        <div key={item.id}>
          {item.name}
          <br />
          {item.quantity}
        </div>
      ))}
    </div>
  );
};
export default Cart;
