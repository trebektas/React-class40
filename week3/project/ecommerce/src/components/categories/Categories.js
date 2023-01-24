import "./Categories.css";
import React, { useEffect, useState } from "react";

function Categories({ setSelectedCategory, getAllProducts, setErrorMessage }) {
  const [activeIndex, setActiveIndex] = useState("");
  const [dataCategories, setDataCategories] = useState();

  //Fetch categories
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((response) => response.json())
      .then((data) => {
        setDataCategories(data);
      })
      .catch((err) => {
        console.log(err);
        setDataCategories();
        setErrorMessage(`Fetch categories => ${err}`);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {dataCategories ? (
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
                  if (activeIndex === index && category) {
                    //Reset active index
                    setActiveIndex();
                    //Get all products data to filteredProducts in App.js
                    getAllProducts();
                  } else {
                    //set category
                    setSelectedCategory(e.currentTarget.innerText);
                    //Set active index
                    setActiveIndex(index);
                  }
                }}
              >
                {category}
              </div>
            );
          })}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Categories;
