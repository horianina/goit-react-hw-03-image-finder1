import React from 'react';

const ImageGalleryItem = ({ id, webformatURL, onClick }) => {
  return (
    <li className="ImageGalleryItem" key={id} onClick={onClick}>
      <img
        src={webformatURL}
        alt="articles"
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

export default ImageGalleryItem;
