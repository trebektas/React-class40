import "./Products.css";
import React from "react";
import { Link } from "react-router-dom";

function Products({ showedProducts }) {
  return (
    <>
      {showedProducts ? (
        <ul className="products">
          {showedProducts.map((product, index) => {
            return (
              <li key={index} className="products--item">
                <Link className="product-link" to={`/product/${product.id}`}>
                  <div className="product">
                    <img
                      className="product--image"
                      src={product.image}
                      alt={product.title}
                    ></img>
                    <span className="product--title" title={product.title}>
                      {product.title}
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Products;
