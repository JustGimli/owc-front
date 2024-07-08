import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

import './Cart.css';
import { Product } from '../../utils/interfaces';
import cartStore from '../../store/CartStore';

const CartPage: React.FC = observer(() => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartStore.cart.map((product: Product, index: number) => (
          <li key={index} className="cart-item">
            <img src={product.imageUrls[0]} alt={product.title} className="cart-image" />
            <div className="cart-details">
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <button onClick={() => cartStore.removeFromCart(product)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <p>Total Items: {cartStore.count}</p>
        <p>Total Price: ${cartStore.total}</p>
        <Link to="/checkout">
          <button>Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
});

export default CartPage;
