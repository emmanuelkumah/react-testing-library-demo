import React from "react";

const ItemList = ({ items }) => {
  return (
    <div>
      <h3>List of items to shop for</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
