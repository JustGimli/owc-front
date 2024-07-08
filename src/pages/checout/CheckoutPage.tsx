import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import styled from '@emotion/styled';
import { PaymentDetails, ShippingDetails } from '../../utils/interfaces';
import cartStore from '../../store/CartStore';
import ContactForm from '../../components/Checkout/ContactForm';
import DeliveryForm from '../../components/Checkout/DelveryPage';
import OrderSummary from '../../components/Checkout/OrderSummary';
import PaymentForm from '../../components/Checkout/PaymentForm';
import { checkCardUtil } from '../../utils/checkcardData';



const CheckoutPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
`;

const CheckoutFormContainer = styled.form`
  flex: 1 1 400px;
  max-width: 500px;
  margin-right: 20px;
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #ff9900;
  border: none;
  color: white;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
`;

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
    let { name, value } = event.target;
    ({ name, value } = checkCardUtil(name, value));
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault();
  //   const response = await fetch('https://your-backend-server.com/api/checkout', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       shippingDetails,
  //       paymentDetails,
  //       cart: cartStore.cart,
  //     }),
  //   });

  //   if (response.ok) {
  //     cartStore.clearCart();
  //     alert('Payment successful!');
  //   } else {
  //     alert('Payment failed!');
  //   }
  };

  return (
    <CheckoutPageContainer>
      <CheckoutFormContainer onSubmit={handleSubmit}>
        <ContactForm shippingDetails={shippingDetails} handleInputChange={handleInputChange} />
        <DeliveryForm shippingDetails={shippingDetails} handleInputChange={handleInputChange} />
        <PaymentForm paymentDetails={paymentDetails} handlePaymentInputChange={handlePaymentInputChange} />
        <CheckoutButton type="submit">Pay now</CheckoutButton>
      </CheckoutFormContainer>
      <OrderSummary />
    </CheckoutPageContainer>
  );
});

export default CheckoutPage;
