import React from 'react';
import './CardList.css';
import { CardInterface } from '../../utils/interfaces';
import Card from './Card/CardItem';


interface CardListProps {
    cards: CardInterface[];
  }
  
  const CardList: React.FC<CardListProps> = ({ cards }) => {
    return (
      <div className="card-list">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            title={card.title}
            price={card.price}
            originalPrice={card.originalPrice}
            reviews={card.reviews}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    );
  };
  
  export default CardList;