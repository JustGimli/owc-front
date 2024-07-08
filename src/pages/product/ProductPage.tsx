import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import './ProductPage.css';
import { Product } from '../../utils/interfaces';
import cartStore from '../../store/CartStore';

const products: Product[] = [
  {
    id: 1,
    title: 'AirPods (2nd Gen) with Charging Case - White - Excellent',
    price: 99.99,
    originalPrice: 159.99,
    reviews: 384,
    condition: 'Excellent',
    imageUrls: [
      'https://www.plug.tech/cdn/shop/products/airpods2a_0001_2.jpg?v=1666737107&%3Bwidth=500&em-format=avif&em-width=500',
      'https://www.plug.tech/cdn/shop/products/airpods2b.jpg?v=1666737107&%3Bwidth=500&em-format=avif&em-width=500',
      'https://www.plug.tech/cdn/shop/products/airpods2c.jpg?v=1666737107&%3Bwidth=500&em-format=avif&em-width=500'
    ],
    deliveryDate: 'Monday, July 1',
    orderWithin: '02 Hours 31 Minutes',
    description: 'Description of the product goes here.',
  },
  // Add more products as needed
];

const ProductPage = observer(() => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(product => product.id.toString() === id);

  const [selectedImage, setSelectedImage] = useState<string | undefined>(product?.imageUrls[0]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-page">
      <div className="product-images">
        <img src={selectedImage} alt={product.title} className="main-image" />
        <div className="thumbnail-images">
          {product.imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`${product.title} thumbnail ${index + 1}`}
              className={`thumbnail ${selectedImage === url ? 'selected' : ''}`}
              onClick={() => setSelectedImage(url)}
            />
          ))}
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

export default ProductPage;
