import React from 'react';
import { ShippingDetails } from '../../utils/interfaces';
import { PaymentHeader, StyledTextField } from './style';

interface DeliveryFormProps {
  shippingDetails: ShippingDetails;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}





const DeliveryForm: React.FC<DeliveryFormProps> = ({ shippingDetails, handleInputChange }) => (
  <div>
    <PaymentHeader>Delivery</PaymentHeader>
    <div className='flex space-x-1'> 
    <StyledTextField
      type="text"
      name="firstName"
      placeholder="First name"
      value={shippingDetails.firstName}
      onChange={handleInputChange}
      required
    />
    <StyledTextField
      type="text"
      name="lastName"
      placeholder="Last name"
      value={shippingDetails.lastName}
      onChange={handleInputChange}
      required
    />
    </div>
    
    <StyledTextField
      type="text"
      name="company"
      placeholder="Company (optional)"
      value={shippingDetails.company}
      onChange={handleInputChange}
    /> 

    <StyledTextField
      type="text"
      name="address"
      placeholder="Address"
      value={shippingDetails.address}
      onChange={handleInputChange}
      required
    />
    <StyledTextField
      type="text"
      name="apartment"
      placeholder="Apartment, suite, etc. (optional)"
      value={shippingDetails.apartment}
      onChange={handleInputChange}
    />
    <div className='flex space-x-1'>
      <StyledTextField
        type="text"
        name="city"
        placeholder="City"
        value={shippingDetails.city}
        onChange={handleInputChange}
        required
      />
      <StyledTextField
        type="text"
        name="state"
        placeholder="State"
        value={shippingDetails.state}
        onChange={handleInputChange}
        required
      />
      <StyledTextField
        type="text"
        name="zipCode"
        placeholder="ZIP code"
        value={shippingDetails.zipCode}
        onChange={handleInputChange}
        required
      />
    </div>
    <StyledTextField
      type="text"
      name="country"
      placeholder="Country"
      value={shippingDetails.country}
      onChange={handleInputChange}
      required
    />
    <StyledTextField
      type="text"
      name="phone"
      placeholder="Phone (optional)"
      value={shippingDetails.phone}
      onChange={handleInputChange}
    />
  </div>
);

export default DeliveryForm;
