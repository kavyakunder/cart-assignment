import { createContext, useContext, useReducer } from "react";
import products from "./data";
import reducer from "./reducer";
const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const initialState = {
    cart: products,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartContextProvider };
