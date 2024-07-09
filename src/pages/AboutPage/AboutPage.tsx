import React from "react";
import { Container, Box } from "@mui/material";
import WelcomePlug from "../../components/Anout/WelcomePlug";
import FaqAboutPlug from "../../components/Anout/FaqAboutPlug";

const AboutPlugPage: React.FC = () => {
  return (
    <Container className="my-10">
      <WelcomePlug />
      <FaqAboutPlug />
    </Container>
  );
};

export default AboutPlugPage;
