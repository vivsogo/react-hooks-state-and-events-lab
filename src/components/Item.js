import React from "react";
import {useState}  from "react"

function Item({ name, category }) {
    const[inCart, newCart] = useState(false);
    function handleClick(){
      newCart((inCart)=>!inCart);
    }


  return (
    <li className={inCart? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{inCart ? "Remove From Cart ": "Add to Cart "}</button>;
    </li>
  );
}

export default Item;
