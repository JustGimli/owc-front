import React from "react";
import CardItem from "./Card/CardItem";
import { Product } from "../../utils/interfaces";

interface CardListProps {
  cards: Product[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div className="flex flex-wrap justify-center ">
      {cards.map((card) => (
        <div key={card.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <CardItem
            id={card.id}
            title={card.title}
            price={card.price}
            originalPrice={card.originalPrice}
            reviews={card.reviews}
            imageUrls={card.imageUrls}
            description={card.description}
            condition={card.condition}
          />
        </div>
      ))}
    </div>
  );
};

export default CardList;
