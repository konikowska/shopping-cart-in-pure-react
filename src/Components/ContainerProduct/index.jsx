import * as React from "react";
import GridProducts from "./GridProducts";
import Select from "./Select";

const ContainerProduct = ({ className }) => {
  const [value, setValue] = React.useState("name");

  const handleChange = e => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <section className={className}>
      <h1>Products</h1>
      <Select handleChange={handleChange} value={value} />
      <GridProducts sortBy={value} />
    </section>
  );
};
export default ContainerProduct;
