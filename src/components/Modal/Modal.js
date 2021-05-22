import React from 'react';

import { ModalContainer } from '../Modal/ModalStyled';

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

export default Modal;
