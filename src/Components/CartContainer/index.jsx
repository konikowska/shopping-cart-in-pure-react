import * as React from "react";
import useCartContext from "../../contexts/useCartContext";
import CartItem from "./CartItem";

const Cart = ({ className }) => {
  const { cart, showCart, setShowCart, setCart } = useCartContext();
  const [productsAmount, setProductsAmount] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setProductsAmount(
      cart.reduce((prev, curr) => {
        const sum = prev + curr.quantity;
        return sum;
      }, 0)
    );
    setTotal(
      cart.reduce((prev, curr) => {
        const sum = prev + curr.price;
        return sum;
      }, 0)
    );
  }, [cart]);

  const handleShowCartClick = e => {
    e.preventDefault();
    setShowCart(!showCart);
  };

  const handleClearClick = e => {
    e.preventDefault();
    setCart([]);
  };

  const buttonText = showCart ? "Hide Cart" : "Show Cart";
  return (
    <section className={className}>
      <div className="cart__header">
        <h1>Cart ({`Items: ${productsAmount} Total: ${total}$`})</h1>
        <button
          type="button"
          onClick={handleClearClick}
          className="button--blue cart__button-clear"
        >
          Clear
        </button>
      </div>

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
    </section>
  );
};
export default Cart;
