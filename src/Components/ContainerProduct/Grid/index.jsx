import * as React from "react";
import GridItem from "./GridItem";
import './styles.scss'

const Grid = ({ items, className }) => {
  if (!items) {
    return null;
  }
  return (
    <ul className={className}>
      {Object.values(items).map(item => (
        <GridItem key={`${item.name}-${item.id}`} item={item} className="grid-item" />
      ))}
    </ul>
  );
};
export default Grid;
