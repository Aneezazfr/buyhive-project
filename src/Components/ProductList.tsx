import { useState, useEffect, useContext } from "react";
import { Products } from "./Products";
// import { PostForm } from '../Posts/PostForm'
import { IProduct } from "../Types/Product";
import axios from "axios";
import { ProductCard } from "./ProductCard";
import AuthContext from "../context/productContext";

export interface IProductListProps {
  setProductCount: (arg: number) => void;
  showBox: boolean;
  showList: boolean;
}
export const ProductList: React.FC<IProductListProps> = ({
  setProductCount,
  showBox,
  showList,
}) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const authCxt = useContext(AuthContext);

  useEffect(() => {
    if (authCxt.getProducts.length <= 18) {
      getProducts();
    }
    console.log(
      authCxt.getProducts,
      "products......................................."
    );
    setProductCount(authCxt.getProducts.length);
  }, []);
  useEffect(() => {
    setProductCount(authCxt.getProducts.length);
  });
  const getProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/products`);
      const data = response.data;

      authCxt.setProducts(data);
      // setProducts(authCxt.getProducts)
      setProductCount(authCxt.getProducts.length);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <>
      <h1></h1>
      <div className="row">
        {/* setProductCount(products.length) */}
        {authCxt.getProducts.map((product: IProduct) =>
          // if (search == "" || crypto.name.toLowerCase().includes(search.toLowerCase())) {}
          showBox ? (
            <Products
              key={product.id}
              product_name={product.product_name}
              images={product.images}
              stock_in_USA={product.stock_in_USA}
              minimum_order_quantity={product.minimum_order_quantity}
              price={product.price}
              product_certification={product.product_certification}
            />
          ) : (
            <div></div>
          )
        )}
        {authCxt.getProducts.map((product: IProduct) =>
          showList ? (
            <ProductCard
              key={product.id}
              product_name={product.product_name}
              images={product.images}
              stock_in_USA={product.stock_in_USA}
              minimum_order_quantity={product.minimum_order_quantity}
              price={product.price}
              product_certification={product.product_certification}
            />
          ) : (
            <div></div>
          )
        )}
        {/* {showList} ? null : null */}
      </div>
    </>
  );
};
