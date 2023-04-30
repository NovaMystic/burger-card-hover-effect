import React from "react";
import burger from "./images/burger.png";
export default function Card() {
  return (
    <div className="card">
      <h2>Burger Bomb</h2>
      <p>
        A juicy beef patty Crispy bacon strips Smoked cheddar cheese Sautéed
        onions Roasted garlic aioli
      </p>
      <div className="circle"></div>
      <img src={burger} height="400px" className="image" />
    </div>
  );
}
