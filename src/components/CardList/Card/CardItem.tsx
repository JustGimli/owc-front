import React from "react";
import { Link } from "react-router-dom";

import "./CardItem.css";
import { Product } from "../../../utils/interfaces";

const CardItem: React.FC<Product> = ({
  id,
  title,
  price,
  originalPrice,
  reviews,
  imageUrls,
}) => {
  return (
    <div className="card">
      <Link to={`/product/${id}`}>
        <img
          src={process.env.PUBLIC_URL + imageUrls[0]}
          alt={title}
          className="card-image"
        />
      </Link>
      <div className="card-content">
        <h3>{title}</h3>
        <p className="price">
          From ${price} <span className="original-price">${originalPrice}</span>
        </p>
        <p className="reviews">{reviews} reviews</p>
        <Link to={`/product/${id}`}>
          <button>View Product</button>
        </Link>
      </div>
    </div>
  );
};

export default CardItem;
