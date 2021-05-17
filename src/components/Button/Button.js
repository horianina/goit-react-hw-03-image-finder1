import React from "react";
import { ButtonContainer } from "./ButtonStyled";

const Button = ({ onClick }) => {
  return (
    <ButtonContainer>
      <button className="Button" type="button" onClick={onClick}>
        Load more
      </button>
    </ButtonContainer>
  );
};

export default Button;
