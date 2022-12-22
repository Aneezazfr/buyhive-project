import * as React from "react";
import { useState, createContext } from "react";
import { IProduct } from "../Types/Product";

//define type of context
export type ProductContextType = {
  getProducts: [];
  setProducts: (product: IProduct) => void;
};

//create context, we call this in any component and use the properties var declared in it 
const AuthContext = createContext<ProductContextType>({
  getProducts: [],
  setProducts: (product: IProduct) => {},
});

//create contextProvider, in this we define the properties, methods that we declare in the context
export const AuthContextProvider = (props: any) => {

  //get initial products from localstorage
  const initialProduct: IProduct = JSON.parse(
    localStorage.getItem("product") || "{}"
  );

  const [getContextProducts, setContextProducts] = useState<IProduct>(initialProduct);
  
  //method to set products and also set them in localstorage  
  const setProducts = (product: IProduct) => {
    console.log("in context", product);
    setContextProducts(product);
    localStorage.setItem("product", JSON.stringify(product));
  };
  
  //define prop to send through context provider so we can use context properties
  const contextValue: any = {
    getProducts: getContextProducts,
    setProducts: setProducts,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
