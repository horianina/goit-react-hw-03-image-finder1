import React from 'react';
import { ModalContainer } from '../Modal/ModalStyled';
import PropTypes from 'prop-types';

const Modal = ({ largeImageURL, onClick }) => {
  return (
    <>
      <ModalContainer>
        <div className="Overlay" onClick={onClick}>
          <div className="Modal">
            <img src={largeImageURL} alt="articles" />
          </div>
        </div>
      </ModalContainer>
    </>
  );
};
Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Modal;
