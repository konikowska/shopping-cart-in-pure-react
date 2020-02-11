import * as React from "react";
import Grid from "../Grid";
// import { fetchProducts } from "../../../api/agent";
import products from "../../../api/mockup/data.json";

const GridProducts = () => {
  // const [products, setProducts] = React.useState(null);
  // React.useEffect(() => {
  //   fetchProducts().then(res => {
  //     setProducts(res);
  //   });
  // });
  console.log(products);

  return (
    <div>
      <p>GridProducts Container</p>
      {products && <Grid items={products} />}
    </div>
  );
};
export default GridProducts;
