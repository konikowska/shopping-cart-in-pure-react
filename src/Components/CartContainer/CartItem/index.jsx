import * as React from "react";
import useCartContext from "../../../contexts/useCartContext";
import "./styles.scss";

const CartItem = ({ item, className }) => {
  const { updateProductQuantity } =  useCartContext()
  const handleAddQuantityClick = e => {
    e.preventDefault();
    updateProductQuantity(item, 1);
  };

  const handleSubQuantityClick = e => {
    e.preventDefault();
    updateProductQuantity(item, -1);
  };

  return (
    <div className={className}>
      <img src={`${item.image.path}`} alt="" className="cart__image" />
      <p className="cart__name">{item.name}</p>
      <div className="cart_quantity-section">
        <p className="cart_quantity__quantity">{item.quantity}</p>
        <div className="cart_quantity__buttons">
          <button type="button" className="button--add" onClick={handleAddQuantityClick}>
            +
          </button>
          <button type="button" className="button--sub" onClick={handleSubQuantityClick}>
            -
          </button>
        </div>
      </div>
      <p>{`${item.price} ${item.currency}`}</p>
    </div>
  );
};
export default CartItem;
