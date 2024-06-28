import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import './CheckoutPage.css';
import { PaymentDetails, Product, ShippingDetails } from '../../utils/interfaces';
import cartStore from '../../store/CartStore';

const CheckoutPage: React.FC = observer(() => {
  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    phone: '',
  });

  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
    nameOnCard: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
  };

  const handlePaymentInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Отправка данных на сервер
    const response = await fetch('https://your-backend-server.com/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        shippingDetails,
        paymentDetails,
        cart: cartStore.cart,
      }),
    });

    if (response.ok) {
      // Очистка корзины после успешной оплаты
      cartStore.clearCart();
      alert('Payment successful!');
    } else {
      alert('Payment failed!');
    }
  };

  return (
    <div className="checkout-page">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Contact</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={shippingDetails.email}
          onChange={handleInputChange}
          required
        />
        <h2>Delivery</h2>
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={shippingDetails.firstName}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={shippingDetails.lastName}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company (optional)"
          value={shippingDetails.company}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={shippingDetails.address}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="apartment"
          placeholder="Apartment, suite, etc. (optional)"
          value={shippingDetails.apartment}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={shippingDetails.city}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={shippingDetails.state}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="zipCode"
          placeholder="ZIP code"
          value={shippingDetails.zipCode}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={shippingDetails.country}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone (optional)"
          value={shippingDetails.phone}
          onChange={handleInputChange}
        />

        <h2>Payment</h2>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card number"
          value={paymentDetails.cardNumber}
          onChange={handlePaymentInputChange}
          required
        />
        <input
          type="text"
          name="expirationDate"
          placeholder="Expiration date (MM / YY)"
          value={paymentDetails.expirationDate}
          onChange={handlePaymentInputChange}
          required
        />
        <input
          type="text"
          name="securityCode"
          placeholder="Security code"
          value={paymentDetails.securityCode}
          onChange={handlePaymentInputChange}
          required
        />
        <input
          type="text"
          name="nameOnCard"
          placeholder="Name on card"
          value={paymentDetails.nameOnCard}
          onChange={handlePaymentInputChange}
          required
        />

        <button type="submit">Pay now</button>
      </form>

      <div className="checkout-summary">
        <h2>Order Summary</h2>
        <ul>
          {cartStore.cart.map((product: Product, index: number) => (
            <li key={index} className="summary-item">
              <img src={product.imageUrl} alt={product.title} className="summary-image" />
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
    </div>
  );
});

export default CheckoutPage;
