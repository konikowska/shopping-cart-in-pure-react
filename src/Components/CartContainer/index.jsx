import * as React from "react";
import { CartContext } from "../../contexts/CartContext";

const Cart = ({ className }) => {
  const { cart } = React.useContext(CartContext);
  return (
    <div className={className}>
      {cart.map(item => (
        <div key={item.id}>
          <img
            src={`${item.image.path}`}
            alt=""
            className="product-image"
            style={{ width: "50px" }}
          />
          <p>{item.name}</p>
          <div>
            <div>{item.quantity}</div>
            <div>
              <button type="button">+</button>
              <button type="button">-</button>
            </div>
          </div>
          <p>{`${item.price} ${item.currency}`}</p>
        </div>
      ))}
    </div>
  );
};
export default Cart;
