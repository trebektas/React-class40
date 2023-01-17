import "./ProductDetails.css";
import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ showedProducts }) => {
  const { id } = useParams();
  return (
    <div className="product-details">
      {showedProducts ? (
        <>
          {showedProducts
            .filter((product) => product.id === parseInt(id))
            .map((product, index) => {
              return (
                <div key={index} className="product-container">
                  <div className="title-container">
                    <h1 className="title-container--title">{product.title}</h1>
                  </div>
                  <div className="product-details--information">
                    <div className="product-details--image">
                      <div className="product-image--container">
                        <img
                          className="product-image"
                          src={product.image}
                          alt={product.title}
                        ></img>
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
