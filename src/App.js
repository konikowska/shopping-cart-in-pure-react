import React from "react";
import "./App.scss";
import './shared.scss';
import ContainerProduct from "./Components/ContainerProduct";
import CartContainer from "./Components/CartContainer";
import CartContextProvider from "./contexts/CartContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <CartContainer className="cart" />
        <ContainerProduct className="products" />
      </CartContextProvider>
    </div>
  );
}

export default App;
