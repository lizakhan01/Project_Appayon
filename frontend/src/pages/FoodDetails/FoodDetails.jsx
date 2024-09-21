import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './FoodDetails.css';

const FoodDetails = () => {
  const { id } = useParams(); // Get the food item's id from the URL
  const { food_list } = useContext(StoreContext);

  // Find the food item in the food_list by matching the id
  const foodItem = food_list.find((item) => item._id === id);

  // If no item is found, show a message or handle it
  if (!foodItem) {
    return <div className="food-details">Food item not found.</div>;
  }

  return (
    <div className="food-details">
      <h1>{foodItem.name}</h1>
      <img src={foodItem.image} alt={foodItem.name} className="food-details-image" />
      <p className="food-details-description">{foodItem.description}</p>
      <p className="food-details-price">Price: ৳{foodItem.price}</p>
    </div>
  );
};

export default FoodDetails;