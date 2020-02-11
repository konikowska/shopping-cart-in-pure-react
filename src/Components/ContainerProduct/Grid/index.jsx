import * as React from "react";
import GridItem from "./GridItem";

const Grid = ({ items }) => {
  if (!items) {
    return null;
  }
  return (
    <ul>
      {Object.values(items).map(item => (
        <GridItem key={item.name} item={item} />
      ))}
    </ul>
  );
};
export default Grid;
