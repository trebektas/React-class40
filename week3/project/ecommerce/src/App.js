import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TitleContainer from "./components/title-container/TitleContainer";
import Categories from "./components/categories/Categories";
import Products from "./components/products/Products";
import ProductDetails from "./components/products/ProductDetails";
import Favourites from "./components/Favourites";
import ErrorMessage from "./components/ErrorMessage";
import { FavouritesProvider } from "./components/context/FavouritesContext";

function App() {
  const [allProducts, setAllProducts] = useState();
  const [showedProducts, setShowedProducts] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [errorMessage, setErrorMessage] = useState();

  //fetch products
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
        setShowedProducts(data);
      })
      .catch((err) => {
        console.log(err);
        setAllProducts();
        setErrorMessage(`Fetch products => ${err}`);
      });
  }, []);

  //fetch with category
  useEffect(() => {
    if (selectedCategory) {
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((response) => response.json())
        .then((data) => {
          setShowedProducts(data);
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage(`Fetch with category => ${err}`);
        });
    } else {
      return;
    }
  }, [selectedCategory]);

  //Get All Products Data to filteredProducts
  const getAllProducts = () => {
    setShowedProducts(allProducts);
    setSelectedCategory();
  };

  return (
    <div className="products-page">
      {errorMessage ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : (
        <FavouritesProvider>
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <TitleContainer header={"Products"} />
                    <Categories
                      setSelectedCategory={setSelectedCategory}
                      getAllProducts={getAllProducts}
                      setErrorMessage={setErrorMessage}
                    />
                    <Products showedProducts={showedProducts} />
                  </>
                }
              />
              <Route
                path="/product/:id"
                element={<ProductDetails showedProducts={showedProducts} />}
              ></Route>
              <Route
                path="/favourites"
                element={
                  <>
                    <TitleContainer header={"Favourites"} />
                    <Favourites />
                  </>
                }
              ></Route>
            </Routes>
          </Router>
        </FavouritesProvider>
      )}
    </div>
  );
}

export default App;
