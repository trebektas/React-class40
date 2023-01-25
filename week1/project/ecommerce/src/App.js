import "./App.css";
import React, { useState } from "react";
import Categories from "./Categories";
import Products from "./Products";
import dataProducts from "./fake-data/all-products";

function App() {
  const [selectedCategory, setSelectedCategory] = useState();

  const filteredProducts = selectedCategory
    ? dataProducts.filter(
        (product) => `FAKE: ${product.category}` === selectedCategory
      )
    : dataProducts;

  return (
    <div className="App">
      <h1>Products</h1>
      <Categories onSelectCategory={setSelectedCategory} />
      <Products filteredProducts={filteredProducts} />
    </div>
  );
}

export default App;
