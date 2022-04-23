import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isLight, setIsLight] = useState("false");

  function handleClick(event){
    setIsLight(!isLight)
  }  

  return (
    <div className={isLight ? "App light" : "App dark"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isLight ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;