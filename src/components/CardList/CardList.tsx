import React from 'react';
import './CardList.css';

import CardItem from './Card/CardItem';
import { Product } from '../../utils/interfaces';

interface CardListProps {
  cards: Product[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.map(card => (
        <CardItem
          key={card.id}
          id={card.id}
          title={card.title}
          price={card.price}
          originalPrice={card.originalPrice}
          reviews={card.reviews}
          condition={card.condition}
          imageUrls={card.imageUrls}
          deliveryDate={card.deliveryDate}
          orderWithin={card.orderWithin}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardList;
