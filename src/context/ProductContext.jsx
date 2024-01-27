import { createContext } from "react";

export const ProductContext = createContext();

export function ProductContextProvider(props) {
  const x = 20;
  
  return (
    <ProductContext.Provider value={x}>
      {props.children}
    </ProductContext.Provider>
  );
}
