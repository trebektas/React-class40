import "./ProductDetails.css";
import React from "react";
import { useParams } from "react-router-dom";
import TitleContainer from "../title-container/TitleContainer";
import heartRegular from "../../assets/heart-regular.svg";
import heartSolid from "../../assets/heart-solid.svg";
import { useFavouritesContext } from "../context/FavouritesContext";

const ProductDetails = ({ showedProducts }) => {
  const { id } = useParams();
  const {
    favourites,
    addProductIdToFavourites,
    removeProductIdFromFavourites,
  } = useFavouritesContext();
  return (
    <div className="product-details">
      {showedProducts ? (
        <>
          {showedProducts
            .filter((product) => product.id === parseInt(id))
            .map((product) => {
              return (
                <div key={product.id} className="product-container">
                  <TitleContainer header={product.title} />
                  <div className="product-details--information">
                    <div className="product-details--image">
                      <div className="product-image--container">
                        <img
                          className="product-image"
                          src={product.image}
                          alt={product.title}
                        ></img>
                        <div
                          className="product-image--favourite-container"
                          onClick={(e) => {
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
                              favourites.includes(product.id)
                                ? heartSolid
                                : heartRegular
                            }
                            alt={product.title}
                          ></img>
                        </div>
                      </div>
                    </div>
                    <p className="product-details--description">
                      {product.description}
                    </p>
                  </div>
                </div>
              );
            })}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
