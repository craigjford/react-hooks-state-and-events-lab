import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState("false");
  const [buttonText, setButtonText] = useState("Add to Cart");

  const handleClick = (event) => {
     
    setInCart(!inCart)

    let newButtonText = event.target.innerText 

    if (newButtonText === "Add to Cart") {
        newButtonText = "Remove From Cart";
    } else {
        newButtonText = "Add to Cart"
    }

    setButtonText(newButtonText);
      
  }  

  return (
    <li className={`${inCart ? "" : "in-cart"}`}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{buttonText}</button>
    </li>
  )
}

export default Item;
