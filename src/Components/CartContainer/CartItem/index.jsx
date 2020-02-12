import * as React from "react";
import './styles.scss'

const CartItem = ({ item, className }) => {
  return (
    <div key={item.id} className={className}>
      <img
        src={`${item.image.path}`}
        alt=""
        className="cart__image"
      />
      <p className="cart__name">{item.name}</p>
      <div className="cart_quantity-section">
        <p className="cart_quantity__quantity">{item.quantity}</p>
        <div className="cart_quantity__buttons">
          <button type="button--add">+</button>
          <button type="button--sub">-</button>
        </div>
      </div>
      <p>{`${item.price} ${item.currency}`}</p>
    </div>
  );
};
export default CartItem;
