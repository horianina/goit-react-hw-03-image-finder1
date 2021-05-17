import React from "react";

const ImageGalleryItem = ({ id, webformatURL }) => {
  return (
    <li className="ImageGalleryItem" key={id}>
      <img
        src={webformatURL}
        alt="articles"
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

export default ImageGalleryItem;
