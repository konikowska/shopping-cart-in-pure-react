import * as React from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "./CartItem";
import useCartContext from "../../contexts/useCartContext";

const Cart = ({ className }) => {
  const { cart, showCart, setShowCart } = useCartContext();

  const handleShowCartClick = e => {
    e.preventDefault();
    setShowCart(!showCart);
  };

  const buttonText = showCart ? "Hide Cart" : "Show Cart";
  return (
    <div className={className}>
      <h1>Cart</h1>
      <button
        onClick={handleShowCartClick}
        className="button--blue cart__button"
      >
        {buttonText}
      </button>
      {showCart && (
        <div className={className}>
          {cart.length < 1 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map(item => (
              <CartItem
                item={item}
                key={`cart-${item.name}-${item.id}`}
                className="cart-item"
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};
export default Cart;
