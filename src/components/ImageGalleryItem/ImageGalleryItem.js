import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImageURL, onImgClick }) => {
  return (
    <li className="ImageGalleryItem" onClick={() => onImgClick(largeImageURL)}>
      <img
        src={webformatURL}
        alt="articles"
        className="ImageGalleryItem-image"
      />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  onImgClick: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
