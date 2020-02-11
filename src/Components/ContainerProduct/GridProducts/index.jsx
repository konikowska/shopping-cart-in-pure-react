import * as React from "react";
import Grid from "../Grid";
import products from "../../../api/mockup/data.json";

const GridProducts = ({ className }) => {
  return (
    <div className={className}>
      <p>GridProducts Container</p>
      {products && <Grid items={products} className="product-grid"/>}
    </div>
  );
};
export default GridProducts;
