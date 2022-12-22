
// import { useState, createContext } from "react";

// const AuthContext = createContext({
//   getProducts: [],
//   setProducts: (product) => {}
// });

// export const AuthContextProvider = (props) => {

//   const initialProduct = JSON.parse(localStorage.getItem("product"));
//   const [getContextProducts, setContextProducts] = useState(initialProduct);
  
//   const setProducts = (product) => {
//     console.log("in context", product)
//     setContextProducts(product);
//     localStorage.setItem("product", JSON.stringify(product))
//   }

//   const contextValue = {
//     getProducts: getContextProducts,
//     setProducts: setProducts
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;