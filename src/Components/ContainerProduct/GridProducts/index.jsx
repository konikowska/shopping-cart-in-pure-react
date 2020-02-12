import * as React from "react";
import Grid from "../Grid";
import products from "../../../api/mockup/data.js";

const GridProducts = ({ className, sortBy }) => {
  const [sortedProducts, setSortedProducts] = React.useState(products);

  React.useEffect(() => {
    const productValues = Object.values(products);
    setSortedProducts(productValues.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1));
  }, [sortBy]);

  return (
    <div className={className}>
      {sortedProducts && (
        <Grid items={sortedProducts} className="product-grid" />
      )}
    </div>
  );
};
export default GridProducts;
