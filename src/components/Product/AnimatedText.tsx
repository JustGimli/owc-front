import React from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const AnimatedText: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    accessibility: false,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    vertical: true,
    verticalSwiping: true,
    centerMode: false
  };

  return (
    <div className="animated-text">
      <Slider {...settings}>
        <div>
          <h2 className="text-4xl font-bold text-center">10,000+ 5 Star Reviews</h2>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-center">10,000+ 5 Star Reviews</h2>
        </div>
      </Slider>
    </div>
  );
};

export default AnimatedText;
