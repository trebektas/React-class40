import React from "react";
import { Link } from "react-router-dom";
import heartRegular from "../../assets/heart-regular.svg";
import heartSolid from "../../assets/heart-solid.svg";
import { useFavouritesContext } from "../context/FavouritesContext";

function Product({ product }) {
  const {
    favourites,
    addProductIdToFavourites,
    removeProductIdFromFavourites,
  } = useFavouritesContext();

  return (
    <li className="products--item">
      <Link className="product-link" to={`/product/${product.id}`}>
        <div className="product">
          <div className="product-image--container">
            <img
              className="product--image"
              src={product.image}
              alt={product.title}
            ></img>
            <div
              className="product-image--favourite-container"
              onClick={(e) => {
                e.preventDefault();
                if (favourites.includes(product.id)) {
                  removeProductIdFromFavourites(product.id);
                } else {
                  addProductIdToFavourites(product.id);
                }
              }}
            >
              <img
                className="product-image--favourite"
                src={
                  favourites.includes(product.id) ? heartSolid : heartRegular
                }
                alt={product.title}
              ></img>
            </div>
          </div>
          <span className="product--title" title={product.title}>
            {product.title}
          </span>
        </div>
      </Link>
    </li>
  );
}

export default Product;
