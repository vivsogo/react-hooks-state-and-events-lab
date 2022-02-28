import React from "react";
import { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
   const[filterBy ,setFilterBy] = useState("All")
    let selectedCategory = filterBy === "All" ? items : items.filter( state => state.category === filterBy)
    const handleChange = (e)=>{
      setFilterBy(e.target.value)
    }
   
   return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}





export default ShoppingList;