import * as React from "react";
import { CartContext } from "./CartContext";

export default function useCartContext() {
  const context = React.useContext(CartContext);
  if (!context)
    throw new Error("CartContext must be used with CartContextProvider!");
  return context;
}
