import { createContext, useState } from "react";
//import { food_list } from "../assets/assets";

export const StoreContext = createContext({});
const StoreContextProvider = (props) => {
  //const [food_list, setFoodList] = useState(food_list);
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://project-appayon-backend-l8c4mannf-khadiza-khanom-lizas-projects.vercel.app"
      : "http://localhost:3001";

  const url = `${baseUrl}/api`;
  const [token, setToken] = useState("");
  const contextValue = {
    //food_list: food_list,
    url,
    token,
    setToken,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
