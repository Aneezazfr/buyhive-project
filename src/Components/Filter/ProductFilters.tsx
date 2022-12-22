import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { IProduct } from "../../Types/Product";
import AuthContext from "../../context/productContext";

export const ProductFilter = () => {
  // const [products, setProducts] = useState<IProduct[]>([])
  const [minPrice, setMinPrice] = useState<string>("1");
  const [maxPrice, setMaxPrice] = useState<string>("99999");
  const [MOQ, setMOQ] = useState<string>("");
  const [stock_available, setStockAvailable] = useState<string>("false");
  const [checked, setChecked] = useState<boolean>(false);
  // const [productCertification, setProductCertification]=useState<string[]>(["EN"]);

  const authCxt = useContext(AuthContext);

  useEffect(() => {
    getProducts();
  }, [minPrice, maxPrice, MOQ, stock_available]);

  const getProducts = async () => {
    try {
      let url = "";
      if (minPrice !== "1" || maxPrice !== "99999") {
        url = `?minPrice=${minPrice}&maxPrice=${maxPrice}`;
      }
      if (MOQ) {
        url = `?MOQ=${MOQ}`;
      }
      if (checked) {
        url = `?stock_in_usa=${stock_available}`;
      }

      const response = await axios.get(
        `http://localhost:3000/api/v1/products` + url
      );
      authCxt.setProducts(response.data);
      console.log("in product filter file ");
      // setProducts(authCxt.getProducts)
    } catch (error: any) {
      console.log(error);
    }
  };

  // const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   var updatedList = [...productCertification];
  //   if (event.target.checked) {
  //     updatedList = [...productCertification, event.target.value];
  //   } else {
  //     updatedList.splice(productCertification.indexOf(event.target.value), 1);
  //   }
  //   setProductCertification(updatedList);
  //   console.log(event.target.value)
  // };

  const handleChange = () => {
    if (checked) {
      setStockAvailable("false");
      setChecked(false);
    } else {
      setChecked(true);
      setStockAvailable("true");
    }
    console.log(
      "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
    );
    console.log(stock_available);
  };

  return (
    <div>
      <h4>Price</h4>
      <div className="d-flex flex-row mt-2">
        <input
          type="text"
          placeholder="From"
          value={minPrice}
          // ref={inputRef1}
          inputMode="numeric"
          onChange={(e) => {
            setMinPrice(e.target.value);
            getProducts();
          }}
          className="w-25 rounded-pill"
        />
        <hr className="mx-2" style={{ width: "15px" }}></hr>
        <input
          type="text"
          placeholder="To"
          value={maxPrice}
          // ref={inputRef2}
          inputMode="numeric"
          onChange={(e) => {
            setMaxPrice(e.target.value);
            getProducts();
          }}
          className="input__box w-25 rounded-pill"
        />
      </div>
      <div className="mt-4">
        <h4>MOQ</h4>
        <input
          type="text"
          placeholder="Less Than"
          value={MOQ}
          // ref={inputMOQ}
          inputMode="numeric"
          onChange={(e) => {
            setMOQ(e.target.value);
            getProducts();
          }}
          className="input__box w-100 py-1 rounded-pill"
        />
      </div>
      {/* <div>
          <h4>Product Certification</h4>
          {products.map((product)=>{
            return (
              <div className="form-check m-2" > 
              <input 
                className="form-check-input" 
                type="checkbox" 
                value={product.product_certification}
                onChange={(e) => handleCheck(e)}
              >
              </input>
              {product.product_certification}
              </div>
          )})}
        </div> */}
      <div className="mt-4">
        <h4>Stock Avalibility</h4>
        <div className="form-check m-2">
          <input
            className="form-check-input"
            type="checkbox"
            // defaultChecked={stock_available}
            value={stock_available}
            checked={checked}
            onChange={() => {
              handleChange();
              getProducts();
            }}
          />
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center">
              <img
                className="img-USA"
                width="24"
                height="24"
                src="	https://thebuyhive.com/buy/img/usa.cbfe8d83.svg"
              />
            </div>
            <div className="" style={{ fontSize: "0.75rem" }}>
              {" "}
              in USA{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
