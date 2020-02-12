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
    <div className={className}>
      <p>Products</p>
      <Select handleChange={handleChange} value={value} />
      <GridProducts sortBy={value} />
    </div>
  );
};
export default ContainerProduct;
