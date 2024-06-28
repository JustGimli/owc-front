import React from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import './ProductPage.css';
import { Product } from '../../utils/interfaces';
import cartStore from '../../store/CartStore';

const ProductPage = observer(() => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(product => product.id.toString() === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-page">
      <div className="product-images">
        <img src={product.imageUrl} alt={product.title} className="main-image" />
        <div className="thumbnail-images">
          <img src={product.imageUrl} alt={product.title} />
          {/* Add more thumbnails if needed */}
        </div>
      </div>
      <div className="product-details">
        <h1>{product.title}</h1>
        <p>Condition: {product.condition}</p>
        <div className="price">
          <span className="current-price">${product.price}</span>
          {product.originalPrice && <span className="original-price">${product.originalPrice}</span>}
        </div>
        <p>{product.reviews} reviews</p>
        <button onClick={() => cartStore.addToCart(product)}>Add to cart</button>
        <p>Free delivery by {product.deliveryDate}</p>
        <p>Order within {product.orderWithin}</p>
        <div className="warranty">
          <p>12-Month Warranty</p>
          <p>Hassle-Free Returns</p>
        </div>
        <div className="description">
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
});

const products: Product[] = [
  {
    id: 1,
    title: 'AirPods (2nd Gen) with Charging Case - White - Excellent',
    price: 99.99,
    originalPrice: 159.99,
    reviews: 384,
    condition: 'Excellent',
    imageUrl: 'https://via.placeholder.com/150',
    deliveryDate: 'Monday, July 1',
    orderWithin: '02 Hours 31 Minutes',
    description: 'Description of the product goes here.',
  },
  // Add more products as needed
];

export default ProductPage;
