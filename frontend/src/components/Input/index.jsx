import React from "react";
import { InputContainer } from "./styles";

const Input = (props) => {
  return (
    <InputContainer>
      <input {...props} />
    </InputContainer>
  );
};

export default Input;