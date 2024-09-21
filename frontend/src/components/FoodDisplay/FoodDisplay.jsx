/*import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Must-Try Delicacies Around You 😋 </h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if ((category === "All" || category === item.category)) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
*/



import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // Ensure food_list exists and is an array
  if (!food_list || food_list.length === 0) {
    return <p>No food items available.</p>;
  }

  return (
    <div className="food-display" id="food-display">
      <h2>Must-Try Delicacies Around You 😋</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          // Only render items if the category matches or category is "All"
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={item._id || index}  // Use a fallback for key if _id is missing
                id={item._id}            // Ensure item._id exists
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;  // Skip rendering if the condition is not met
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;