import "./App.css";
import React, { useState } from "react";
import Categories from "./Categories";
import Products from "./Products";
import dataProducts from "./fake-data/all-products";

function App() {
  const [filteredProducts, setFilteredProducts] = useState(dataProducts);
  const [activeIndex, setActiveIndex] = useState("");

  //Filtering Products Data
  const filteringData = (category) => {
    let productsByCategory = dataProducts.filter(
      (product) => `FAKE: ${product.category}` === category
    );
    setFilteredProducts(productsByCategory);
  };

  //Get All Products Data to filteredProducts
  const getAllData = () => {
    setFilteredProducts(dataProducts);
  };

  return (
    <div className="App">
      <h1>Products</h1>
      <Categories
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        filteringData={filteringData}
        getAllData={getAllData}
      />
      <Products filteredProducts={filteredProducts} />
    </div>
  );
}

export default App;
