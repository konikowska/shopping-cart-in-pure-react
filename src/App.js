import React from "react";
import "./App.css";
import Product from "./Components/Product";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="App">
      <Cart />
      <Product />
    </div>
  );
}

export default App;
