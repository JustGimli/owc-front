import React from 'react';
import StarIcon from '@mui/icons-material/Star';

interface StarReviewsProps {
  rating: number;
  totalReviews: number;
}

const StarReviews: React.FC<StarReviewsProps> = ({ rating, totalReviews }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<StarIcon key={i} className={`text-xl ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`} />);
  }

  return (
    <div className="flex items-center">
      <div className="flex mr-2">
        {stars}
      </div>
      <p className="text-lg text-gray-700">Based on {totalReviews} reviews</p>
    </div>
  );
};

export default StarReviews;
