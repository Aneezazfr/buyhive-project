import React from "react";
import ProductFilter from "./Filter/ProductFilters";

const SideBar = () => {
  return (
    <div className="border rounded h-75 px-3 py-5">
      <ProductFilter />
    </div>
  );
};

export default SideBar;
