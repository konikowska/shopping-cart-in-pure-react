import * as React from "react";
import useCartContext from "../../../../contexts/useCartContext";
import "./styles.scss";

const GridItem = ({ item, className }) => {
  const { addProduct } = useCartContext();
  const handleAddToCartClick = () => {
    addProduct(item);
  };
  return (
    <li className={className}>
      <img src={`${item.image.path}`} alt="" className="product__image" />
      <div className="product__desc">
        <p>{item.name}</p>
        <p>{`${item.initialPrice} ${item.currency}`}</p>
      </div>
      <button
        onClick={handleAddToCartClick}
        className="button--blue product__button"
      >
        add to cart
      </button>
    </li>
  );
};
export default GridItem;
