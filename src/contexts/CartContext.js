import * as React from "react";

export const CartContext = React.createContext();

const CartContextProvider = props => {
  const [cart, setCart] = React.useState([]);
  const [showCart, setShowCart] = React.useState(false);

  const updateProductQuantity = (product, amount) => {
    setCart(prevState =>
      prevState.reduce((prev, curr) => {
        if (curr.id === product.id) {
          curr.quantity = product.quantity + amount;

          if (curr.quantity < 1) {
            removeProduct(product);
            return;
          }
          curr.price = product.initialPrice * curr.quantity;
        }

        return [...prevState];
      }, [])
    );
  };

  const addProduct = product => {
    if (!showCart) {
      setShowCart(true);
    }

    const itemInCart = cart.find(item => item.id === product.id);
    if (itemInCart) {
      updateProductQuantity(itemInCart, 1);
      return;
    }

    setCart([
      ...cart,
      { ...product, quantity: 1, price: product.initialPrice }
    ]);
  };

  const removeProduct = product => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, updateProductQuantity, setShowCart, showCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
