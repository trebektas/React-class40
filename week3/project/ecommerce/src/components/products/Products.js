import "./Products.css";
import React from "react";
import Product from "./Product";

function Products({ showedProducts }) {
  return (
    <>
      {showedProducts ? (
        <ul className="products">
          {showedProducts.map((product, index) => {
            return <Product key={index} product={product} />;
          })}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Products;
