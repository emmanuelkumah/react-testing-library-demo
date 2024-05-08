import React, { useState } from "react";

const ItemInput = ({ items, setItems }) => {
  const [item, setItem] = useState("");

  const handleItemSubmit = (e) => {
    e.preventDefault();
    setItem("");
    setItems((prevItem) => {
      return [
        ...items,
        {
          id: Math.floor(Math.random() * 100) + 1,
          name: item,
          completed: false,
        },
      ];
    });
  };
  return (
    <div>
      <form onSubmit={(e) => handleItemSubmit(e)}>
        <input
          type="text"
          name=""
          id=""
          value={item}
          placeholder="Enter groceries"
          onChange={(event) => setItem(event.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default ItemInput;
