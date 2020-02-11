import * as React from "react";
import GridProducts from "./GridProducts";

const ContainerProduct = () => {
  return (
    <div>
      <p>Products</p>
      <label htmlFor="cars">Sort: </label>
      <select id="sort">
        <option value="price">price</option>
        <option value="name">name</option>
      </select>
      <GridProducts />
    </div>
  );
};
export default ContainerProduct;
