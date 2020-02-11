import React from "react";
import "./App.scss";
import ContainerProduct from "./Components/ContainerProduct";
import ContainerCart from "./Components/ContainerCart";
import CartContextProvider from "./contexts/CartContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <ContainerCart className="cart" />
        <ContainerProduct className="products" />
      </CartContextProvider>
    </div>
  );
}

export default App;
