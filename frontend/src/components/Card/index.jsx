import React from "react";
import { CardContainer } from "./styles";

const Card = ({ children, width = "100%", height = "auto", noShadow = false }) => {
  return (
    <CardContainer width={width} height={height} noShadow={noShadow}>
      {children}
    </CardContainer>
  );
};

export default Card;