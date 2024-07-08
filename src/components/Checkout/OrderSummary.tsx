import React from 'react';
import { observer } from 'mobx-react-lite';
import cartStore from '../../store/CartStore';
import { Product } from '../../utils/interfaces';
import { PaymentHeader } from './style';

const OrderSummary: React.FC = observer(() => (
  <div className="checkout-summary">
    <PaymentHeader>Order Summary</PaymentHeader>
    <ul>
      {cartStore.cart.map((product: Product, index: number) => (
        <li key={index} className="summary-item">
          {/* <img src={product.imageUrl} alt={product.title} className="summary-image" /> */}
          <div className="summary-details">
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>Condition: {product.condition}</p>
          </div>
        </li>
      ))}
    </ul>
    <div className="summary-total">
      <p>Subtotal: ${cartStore.total}</p>
      <p>Total: ${cartStore.total}</p>
    </div>
  </div>
));

export default OrderSummary;
