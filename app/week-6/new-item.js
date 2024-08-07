"use client";
import React, { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newId = Math.floor(Math.random() * 1000000).toString();
    const newItem = { id: newId, name, quantity, category };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <main>
      <form
        className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full"
        onSubmit={handleSubmit}
      >
        <div className="m-2">
          <input
            className="p-2 mb-2 rounded-md w-full"
            type="text"
            id="name"
            value={name}
            required
            placeholder="Item name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="flex justify-between mt-2">
          <input
            className="ml-2 p-1.5 w-32 rounded-md font-sans"
            type="number"
            id="quantity"
            value={quantity}
            min={1}
            max={99}
            required
            onChange={(event) => setQuantity(event.target.value)}
          />
          <select
            className="mr-2 p-1.5 w-36 rounded-md font-sans"
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <br />
        <button
          className="bg-blue-400 w-full p-1.5 rounded-lg mb-2 text-white font-bold"
          type="submit"
        >
          +
        </button>
      </form>
    </main>
  );
}
