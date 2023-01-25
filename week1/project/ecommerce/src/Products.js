import "./Products.css";
import React from "react";

function Products({ filteredProducts }) {
  return (
    <ul className="products">
      {filteredProducts.map((product) => {
        return (
          <li key={product.id} className="products--item">
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
          </li>
        );
      })}
    </ul>
  );
}

export default Products;
