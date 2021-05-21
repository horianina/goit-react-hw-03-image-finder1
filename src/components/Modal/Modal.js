import React, { Component } from 'react';

import { ModalContainer } from '../Modal/ModalStyled';

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
  }
  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
  }
  render() {
    return (
      <>
        <ModalContainer>
          <div className="Overlay">
            <div className="Modal" key={this.id}>
              <img src={this.largeImageURL} alt="articles" />
            </div>
          </div>
        </ModalContainer>
      </>
    );
  }
}
// const Modal = ({ largeImageURL, id, onClick }) => {
//   return (
//     <>
//       <ModalContainer>
//         <div className="Overlay">
//           <div className="Modal" key={id}>
//             <img src={largeImageURL} alt="articles" onClick={onClick} />
//           </div>
//         </div>
//       </ModalContainer>
//     </>
//   );
// };

// export default Modal;
