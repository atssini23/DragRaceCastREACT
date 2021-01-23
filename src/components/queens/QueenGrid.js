import React from "react";
import QueenItem from "./QueenItem";

const QueenGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <QueenItem key={item.id} item={item}></QueenItem>
      ))}
    </section>
  );
};
export default QueenGrid;
