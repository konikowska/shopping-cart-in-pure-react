import React from "react";
import "./App.css";
import ContainerProduct from "./Components/ContainerProduct";
import ContainerCart from "./Components/ContainerCart";
import CartContextProvider from "./contexts/CartContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <ContainerCart />
        <ContainerProduct />
      </CartContextProvider>
    </div>
  );
}

export default App;
