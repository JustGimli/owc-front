import React from 'react';
import './Card.css';
import { CardInterface } from '../../../utils/interfaces';


const Card: React.FC<CardInterface> = ({ title, price, originalPrice, reviews, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p className="price">From {price} <span className="original-price">{originalPrice}</span></p>
        <p className="reviews">{reviews} reviews</p>
      </div>
    </div>
  );
};

export default Card;
