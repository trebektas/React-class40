import "./Categories.css";
import React, { useState } from "react";
import dataCategories from "./fake-data/all-categories";

function Categories({ filteringData, getAllData }) {
  const [activeIndex, setActiveIndex] = useState("");

  return (
    <div className="categories">
      {dataCategories.map((category, index) => {
        return (
          <div
            key={index}
            className={
              activeIndex === index
                ? "categories--item categories--item-selected"
                : "categories--item"
            }
            onClick={(e) => {
              if (activeIndex === index) {
                //Reset active index
                setActiveIndex();
                //Get all products data to filteredProducts in App.js
                getAllData();
              } else {
                setActiveIndex(index);
                //Set filtered products
                filteringData(e.currentTarget.innerText);
              }
            }}
          >
            {category}
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
