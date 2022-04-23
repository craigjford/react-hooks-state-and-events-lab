import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  
    const [selectedCategory, setSelectedCategory] = useState("All");
  
    function handleCategoryChange(event) {
        console.log(event)
        const newSelectedCategory = event.target.value
        setSelectedCategory(newSelectedCategory)
    }

    let itemsToDisplay = [];

    if (selectedCategory === "All") {
        itemsToDisplay = items
    } else {
        itemsToDisplay = items.filter(item => item.category === selectedCategory)
    }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
