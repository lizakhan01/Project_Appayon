import { createContext, useState } from "react";
//import { food_list } from "../assets/assets";

export const StoreContext = createContext({});
const StoreContextProvider = (props) => {
  //const [food_list, setFoodList] = useState(food_list);
  const url = "https://localhost:8080";
  const [token,setToken] = useState("");
  const contextValue = {
    //food_list: food_list,
    url,
    token,
    setToken
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
