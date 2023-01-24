import "./TitleContainer.css";
import React from "react";
import { Link } from "react-router-dom";

const TitleContainer = ({ header }) => {
  return (
    <div className="title-container">
      <h1 className="title-container--title">{header}</h1>
      <div className="nav">
        <Link className="nav-link" to="/">
          Products
        </Link>
        <Link className="nav-link" to="/favourites">
          Favourites
        </Link>
      </div>
    </div>
  );
};

export default TitleContainer;
