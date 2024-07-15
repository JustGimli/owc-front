import React from "react";
import { Typography, Box } from "@mui/material";

const WelcomePlug: React.FC = () => {
  return (
    <Box className="text-center my-10">
      <h4 className="font-bold mb-5 text-center" style={{ fontSize: "3rem" }}>
        Welcome to Rizz .
      </h4>
      <Typography variant="body1" className="text-gray-700">
        We make it easy for you to purchase the personal technology you need at
        40 - 70% off other retailers’ pricing, helping you to play a part in
        reducing electronic waste (e-waste) and get the most out of your
        devices. Plus, with our Certified Pre-Owned Assurance, you’ll have peace
        of mind knowing your purchase is backed by our unmatched one-year
        warranty and 30-day money back guarantee.
      </Typography>
    </Box>
  );
};

export default WelcomePlug;
