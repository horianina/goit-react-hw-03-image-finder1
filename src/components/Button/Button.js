import React from 'react';
import { ButtonContainer } from './ButtonStyled';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <ButtonContainer>
      <button className="Button" type="button" onClick={onClick}>
        Load more
      </button>
    </ButtonContainer>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;
