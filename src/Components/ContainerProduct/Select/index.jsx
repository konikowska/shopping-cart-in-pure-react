import React from "react";

function Select({ handleChange, value }) {
  return (
    <>
      <label htmlFor="cars">Sort: </label>
      <select id="sort" value={value} onChange={handleChange}>
        <option value="initialPrice">Price</option>
        <option value="name">Name</option>
      </select>
    </>
  );
}

export default Select;
