import React, { useEffect, useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import "./SearchCategory.css";
import axios from "axios";
import { ICategories } from "../Types/Categories";
import AuthContext from "../context/productContext";
import { createUniqueName } from "typescript";
import "../App.css";

const SearchCategory = () => {
  let arr;
  const [categories, setCategories] = useState<ICategories[]>([]);

  const [selectCategory, setSelectCategory] = useState<string>("");
  const [parentCategories, setParentCategories] = useState<any>([]);
  const [pCategory,setPCategory] = useState<any>();
  const [subCategories, setSubCategories] = useState<any>([]);
  const authCxt = useContext(AuthContext);

  const [query, setQuery] = useState("");

  const [modal, setModal] = useState<boolean>(false);
  const modalhandler = () => {
    setModal(!modal);
  };

  useEffect(() => {
    getParentCategories();
    removeDup(arr1);
  },[categories])

  useEffect(() => {
    getCategories();
    getProducts();
  }, [selectCategory, query]);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/categories`
      );
      const data = response.data;
      // debugger
      setCategories(data);
      getProducts();
    } catch (error: any) {
      console.log(error);
    }
  };
  const getProducts = async () => {
    try {
      let url = "";
      if (selectCategory.length !== 0) {
        url = `?sub_categories=${selectCategory}`;
      }
      // if(parentCategories){
      //   debugger
      //   url = `?pCategory=${parentCategories}`;
      // }
      // debugger
      const response = await axios.get(
        `http://localhost:3000/api/v1/products` + url
      );
      console.log("products after searching");

      // authCxt.setProducts(response.data)
      // setAllData(response.data)
      if (!query) {
        authCxt.setProducts(response.data);
      } else {
        authCxt.setProducts(
          response.data.filter((data: any) =>
            data.product_name.toLowerCase().includes(query.toLowerCase())
          )
        );
      }
    } catch (error: any) {
      console.log(error);
    }
  };
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    console.log(query);
  };
  let arr1: any = [];
  const getParentCategories = () => {
    categories.map(
      (category, index) => (arr1[index] = category.parent_category)
    );
    return arr1;
  };
  // to remove duplication
  const removeDup = (data: []) => {
    let arr2: any = [];
    arr2 = data.filter((item, index) => data.indexOf(item) === index)
    setParentCategories(arr2);
    console.log("parentCategories",parentCategories)
  };
  return (
    <>
      <div
        className="px-4 py-3 d-flex justify-content-between align-items-center"
        style={{ backgroundColor: "#f3f4f6", borderRadius: "0.45rem" }}
      >
        <div>
          <button
            className="square rounded-pill border-0 bg-transparent d-flex justify-content-center align-items-center hide-category-btn"
            onClick={modalhandler}
          >
            <img
              className="me-2"
              width="30"
              height="30"
              src="https://img.icons8.com/material-outlined/24/0096FF/four-squares.png"
            />
            <span className="">Categories</span>
          </button>
        </div>
        <div
          className="bg-white border-0 py-2 px-3 d-flex justify-content-between align-items-center"
          style={{ borderRadius: "35px", width: "75%" }}
        >
          <input
            type="text"
            name="name"
            className="border-0 searchBar"
            placeholder="What are you looking for?"
            onChange={(event) => handleSearch(event)}
          />
          <div className="vr hide-category-dropdown"></div>
          <select
            className="border-0 bg-white selectCategory text-muted select-arrow hide-category-dropdown"
            id="category"
            onChange={(e) => {
              setSelectCategory(e.target.value);
            }}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option value={category.sub_categories}>
                {category.sub_categories}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Button className="text-center square rounded-pill px-4 d-flex justify-content-center align-items-center ">
            <p className="hide-search-btn-text d-flex justify-content-center align-items-center" style={{marginBottom: "0rem"}}>Search</p>
            <img width="25" height="25" src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/search.png" className="hide-search-btn-icon "/>
          </Button>
        </div>
      </div>

      <button
        className="d-flex justify-content-center align-items-center border-0 py-1 mt-3 mx-4 rounded-pill hide-long-category-btn"
        onClick={modalhandler}
        style={{ backgroundColor: "#f3f4f6", width: "93%" }}
      >
        <img
          className="me-2"
          width="30"
          height="30"
          src="https://img.icons8.com/material-outlined/24/0096FF/four-squares.png"
        />
        <span className="">Categories</span>
      </button>

      {modal && (
        <div
          className="scroll mt-2 mt-lg-0"
          style={{ backgroundColor: "#f3f4f6", maxWidth: "1296px" }}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="row">
            {parentCategories.map((name: any) => (  
              <div className="col">
                <h3>{name}</h3> 
                {/* <>{setPCategory(name)}</> */}
                <li></li>
              </div> 
            ))}  
          </div>
          <div className="row"> 
            {categories.map((category) => (
              <div className="col">
                <h3>{category.parent_category}</h3>
                <p>{category.sub_categories}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchCategory;
