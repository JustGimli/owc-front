import React from 'react';
import { ShippingDetails } from '../../utils/interfaces';
import { Input, TextField, styled } from '@mui/material';
import { PaymentHeader, StyledTextField } from './style';


interface ContactFormProps {
  shippingDetails: ShippingDetails;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const ContactForm: React.FC<ContactFormProps> = ({ shippingDetails, handleInputChange }) => (
  <div>
    <PaymentHeader>Contact</PaymentHeader>
    <StyledTextField
      type="email"
      name="email"
      placeholder="Email"
      value={shippingDetails.email}
      onChange={handleInputChange}
      required
    />
  </div>
);

export default ContactForm;
