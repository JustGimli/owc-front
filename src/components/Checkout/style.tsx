import { TextField, styled } from "@mui/material";
import { ReactNode } from "react";

export const StyledTextField = styled(TextField)`
  margin-top: 10px;
  margin-bottom: 15px;
  width: 100%;
`;


export const PaymentHeader: React.FC<any> = ({ children }) => {
  return (
      <h1 className="text-2xl font-bold text-gray-800 mb-2">{children}</h1>
  );
};