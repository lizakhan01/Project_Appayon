
// Menu.jsx

import React from "react";
import { Link } from "react-router-dom";
import foodData from "../foodData.json";
import "./Menu.css";

// Importing individual food images
import foodImage1 from "../Assets/food_2.png";
import foodImage2 from "../Assets/food_3.png";
import foodImage3 from "../Assets/food_4.png";
import foodImage4 from "../Assets/food_5.png";
import foodImage5 from "../Assets/food_6.png";
import foodImage6 from "../Assets/food_7.png";
import foodImage7 from "../Assets/food_8.png";
import foodImage8 from "../Assets/food_9.png";
import foodImage9 from "../Assets/food_10.png";
import foodImage10 from "../Assets/food_11.png";
import foodImage11 from "../Assets/food_12.png";
import foodImage12 from "../Assets/food_13.png";
import foodImage13 from "../Assets/food_14.png";
import foodImage14 from "../Assets/food_15.png";
import foodImage15 from "../Assets/food_16.png";
import foodImage16 from "../Assets/food_17.png";
import foodImage17 from "../Assets/food_18.png";
import foodImage18 from "../Assets/food_19.png";
import foodImage19 from "../Assets/food_20.png";

import foodImage20 from "../Assets/food_26.png";
import foodImage21 from "../Assets/salad.png";
// Add more image imports as needed for each food item

const Menu = () => {
  const getImageForFood = (imagePath) => {
    switch (imagePath) {
      case "./Assets/food_2.png":
        return foodImage1;
      case "./Assets/food_3.png":
        return foodImage2;
        case "./Assets/food_4.png":
        return foodImage3;
        case "./Assets/food_5.png":
        return foodImage4;
        case "./Assets/food_6.png":
        return foodImage5;
        case "./Assets/food_7.png":
        return foodImage6;
        case "./Assets/food_8.png":
        return foodImage7;
        case "./Assets/food_9.png":
        return foodImage8;

        case "./Assets/food_10.png":
        return foodImage9;

        case "./Assets/food_11.png":
        return foodImage10;

        case "./Assets/food_12.png":
        return foodImage11;
        case "./Assets/food_13.png":
        return foodImage12;

        case "./Assets/food_14.png":
        return foodImage13;
        case "./Assets/food_15.png":
        return foodImage14;
        case "./Assets/food_16.png":
        return foodImage15;
        case "./Assets/food_17.png":
        return foodImage16;
        case "./Assets/food_18.png":
        return foodImage17;
        case "./Assets/food_19.png":
        return foodImage18;
        case "./Assets/food_20.png":
        return foodImage19;


        case "./Assets/food_26.png":
        return foodImage20;

      case "./Assets/salad.png":
        return foodImage21;
      // Add more cases for other images
      default:
        return foodImage1; // Default image if no match
    }
  };

  return (
    <div className="menu-container">
      {foodData.map((food) => (
        <Link to={`/menu/${food.id}`} key={food.id} className="menu-item-link">
          <div className="menu-item">
            <img src={getImageForFood(food.image)} alt={food.name} />
            <p>{food.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};



export default Menu;
