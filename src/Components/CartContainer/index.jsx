import * as React from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "./CartItem";

const Cart = ({ className }) => {
  const { cart } = React.useContext(CartContext);
  return (
    <div className={className}>
      {cart.map(item => (
       <CartItem item={item} className="cart-item" />
      ))}
    </div>
  );
};
export default Cart;
