import React from 'react';
import { PaymentDetails } from '../../utils/interfaces';
import { PaymentHeader, StyledTextField } from './style';

interface PaymentFormProps {
  paymentDetails: PaymentDetails;
  handlePaymentInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}




const PaymentForm: React.FC<PaymentFormProps> = ({ paymentDetails, handlePaymentInputChange }) => (
  <div>
    <PaymentHeader>Payment</PaymentHeader>

    <StyledTextField
      type="text"
      name="cardNumber"
      label="Card number"
      value={paymentDetails.cardNumber}
      onChange={handlePaymentInputChange}
      required
      variant="outlined" />
    
    <div className='flex space-x-1'>
      <StyledTextField
      type="text"
      name="expirationDate"
      label="(MM / YY)"
      onChange={handlePaymentInputChange}
      required
      value={paymentDetails.expirationDate}
      variant="outlined" />
    <StyledTextField
      type="text"
      name="securityCode"
      label="Security code"
      value={paymentDetails.securityCode}
      onChange={handlePaymentInputChange}
      required
      variant="outlined" /></div>
   
    <StyledTextField
      type="text"
      name="nameOnCard"
      label="Name on card"
      value={paymentDetails.nameOnCard}
      onChange={handlePaymentInputChange}
      required
      variant="outlined" />
  </div>
);

export default PaymentForm;


