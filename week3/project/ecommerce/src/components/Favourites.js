import React, { useEffect, useState } from "react";
import { useFavouritesContext } from "./context/FavouritesContext";
import Product from "./products/Product";

const Favourites = () => {
  const { favourites } = useFavouritesContext();
  const [favouritedProducts, setFavouritedProducts] = useState(null);

  //fetch favourites
  useEffect(() => {
    if (favourites.length > 0) {
      Promise.all(
        favourites.map((favouritesId) => {
          return fetch(`https://fakestoreapi.com/products/${favouritesId}`);
        })
      )
        .then((respones) =>
          Promise.all(respones.map((response) => response.json()))
        )
        .then((datas) => {
          return setFavouritedProducts(datas);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setFavouritedProducts();
      return;
    }
  }, [favourites]);

  return (
    <>
      {favourites.length > 0 ? (
        <>
          {favouritedProducts ? (
            <ul className="products">
              {favouritedProducts.map((product, index) => {
                return <Product key={index} product={product} />;
              })}
            </ul>
          ) : (
            <p>Loading.....</p>
          )}
        </>
      ) : (
        <p>You haven't chosen any favourites yet!</p>
      )}
    </>
  );
};

export default Favourites;
