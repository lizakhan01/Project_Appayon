import React from "react";
import foodData from "../foodData.json";
import "./Menu.css";
import foodImage1 from "../Assets/food_27.png";
import foodImage2 from "../Assets/food_26.png";
import foodImage3 from "../Assets/salad.png";

const Menu = () => {
  const getImageForFood = (imagePath) => {
    switch (imagePath) {
      case "./Assets/food_27.png":
        return foodImage1;
      case "./Assets/food_26.png":
        return foodImage2;
      case "./Assets/salad.png":
        return foodImage3;
      default:
        return foodImage1; // Default image if no match
    }
  };

  return (
    <div className="menu-container">
      {foodData.map((food) => (
        <div key={food.id} className="menu-item">
          <img src={getImageForFood(food.image)} alt={food.name} />
          <h3>{food.name}</h3>
          <p>{food.description}</p>
          <p>{food.price}</p>
          <p>{food.review}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;