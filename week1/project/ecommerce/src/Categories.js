import "./Categories.css";
import React, { useState } from "react";
import dataCategories from "./fake-data/all-categories";

function Categories({ onSelectCategory }) {
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
                //Reset selected category
                onSelectCategory();
              } else {
                setActiveIndex(index);
                //Set selected category
                onSelectCategory(e.currentTarget.innerText);
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
