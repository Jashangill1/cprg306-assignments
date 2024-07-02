"use client";

import React, { useState } from 'react';
import Item from "./item";

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = items
    .map((item) => item)
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });

  const nameClick = () => {
    setSortBy("name");
  };

  const categoryClick = () => {
    setSortBy("category");
  };

  return (
    <div className="flex flex-col gap-2 items-start p-2 bg-slate-950 text-white min-h-screen">
      <div className="flex flex-row gap-4 items-center mb-2">
        <p className="p-2">Sort by:</p>
        <button
          onClick={nameClick}
          className={`p-2 ${sortBy === "name" ? "bg-orange-500" : "bg-orange-600"}`}
        >
          Name
        </button>
        <button
          onClick={categoryClick}
          className={`p-2 rounded ${sortBy === "category" ? "bg-orange-500" : "bg-orange-600"}`}
        >
          Category
        </button>
      </div>
      <ul className="space-y-2">
        {sortedItems.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
