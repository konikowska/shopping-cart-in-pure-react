import * as React from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "./CartItem";

const Cart = ({ className }) => {
  const { cart } = React.useContext(CartContext);
  const [showCart, setShowCart] = React.useState(false);

  const handleShowCartClick = e => {
    e.preventDefault();
    setShowCart(!showCart);
  };

  return (
    <div className={className}>
      <h1>Cart</h1>
      <button onClick={handleShowCartClick} className="button--blue cart__button">show cart</button>
      {showCart && (
        <div className={className}>
          {cart.length < 1 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map(item => <CartItem item={item} className="cart-item" />)
          )}
        </div>
      )}
    </div>
  );
};
export default Cart;
