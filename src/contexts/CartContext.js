import * as React from "react";

export const CartContext = React.createContext();

const CartContextProvider = props => {
  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    console.log(cart);
  }, [cart]);

  const updateProduct = product => {
    setCart(prevState =>
      prevState.reduce((prev, curr) => {
        console.log({ prev, curr });
        if (curr.id === product.id) {
          curr.quantity = product.quantity + 1;
        }
        return [...prevState];
      }, [])
    );
  };

  const addProduct = product => {
    const itemInCart = cart.find(item => item.id === product.id);
    if (itemInCart) {
      updateProduct(itemInCart);
      return;
    }

    setCart([...cart, { ...product, quantity: 1 }]);
    console.log(cart);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
