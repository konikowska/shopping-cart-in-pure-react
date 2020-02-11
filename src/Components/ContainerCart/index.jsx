import * as React from "react";
import { CartContext } from "../../contexts/CartContext";

const Cart = ({ className }) => {
  const { cart } = React.useContext(CartContext);
  return (
    <div className={className}>
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
