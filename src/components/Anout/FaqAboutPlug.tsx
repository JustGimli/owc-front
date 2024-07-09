import React from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqAboutPlug: React.FC = () => {
  return (
    <Box className="my-10">
      <h5 className="font-bold mb-5 text-center" style={{ fontSize: "3rem" }}>
        FAQ about plug
      </h5>
      <Accordion sx={{ background: "#e6e9e9" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <span className="font-bold mb-5 text-center">Who is plug tech?</span>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Plug is a leading U.S. electronics provider that connects people
            around the world to reliable, Certified Pre-Owned devices, including
            iPhones, Androids, AirPods, Macs, Smartwatches, accessories, and
            more. We make it easy for you to purchase the personal technology
            you need at 40 - 70% off other retailers’ pricing, helping you to
            play a part in reducing electronic waste (e-waste) and get the most
            out of your devices. Plus, with our Certified Pre-Owned Assurance,
            you’ll have peace of mind knowing your purchase is backed by our
            unmatched one-year warranty and 30-day money back guarantee.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ background: "#e6e9e9" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <span className="font-bold mb-5 text-center">
            How do we ensure quality?
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our team is committed to providing the best in everything we do,
            helping to ensure the only difference between a new and plug
            Certified Pre-Owned device is the price. From purchasing devices
            through Carrier Auctions and other certified dealers, to sanitizing
            and conducting hand tests with our 90+ point performance evaluation,
            every product we sell meets our incredibly high standards. And,
            unlike other retailers, each device is tested, cleaned, sanitized,
            graded, and shipped from plug’s headquarters in St. Louis, Missouri,
            helping to ensure the highest quality and performance.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ background: "#e6e9e9" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <span className="font-bold mb-5 text-center">
            What is the plug mission statement?
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To reduce electronic waste around the globe and elevate quality in
            each individual’s experience while providing a premium necessity at
            a valued price
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ background: "#e6e9e9" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <span className="font-bold mb-5 text-center">
            An environmentally friendly purchase you can feel good about.
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            As part of our commitment to providing you with a better way to
            purchase your next device, we are dedicated to helping reduce
            e-waste around the globe. To date, plug has helped to save over one
            million devices from reaching landfills, and we’re looking to double
            that number by 2025.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FaqAboutPlug;
