import React, { createContext, useState, useContext } from "react";

export const FavouritesContext = createContext(null);

export function useFavouritesContext() {
  return useContext(FavouritesContext);
}

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  function addProductIdToFavourites(id) {
    setFavourites([...favourites, id]);
  }

  function removeProductIdFromFavourites(id) {
    const newArray = favourites.filter((productId) => productId !== id);
    setFavourites(newArray);
  }

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addProductIdToFavourites,
        removeProductIdFromFavourites,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
