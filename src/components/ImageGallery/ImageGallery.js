import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryContainer } from './ImageGalleryStyled';
import PropTypes from 'prop-types';

const ImageGallery = ({ articles, onImgClick }) => {
  return (
    <ImageGalleryContainer>
      <ul className="ImageGallery">
        {articles.length > 0 &&
          articles.map(article => (
            <ImageGalleryItem
              key={article.id}
              webformatURL={article.webformatURL}
              largeImageURL={article.largeImageURL}
              onImgClick={onImgClick}
            />
          ))}
      </ul>
    </ImageGalleryContainer>
  );
};
ImageGallery.propTypes = {
  articles: PropTypes.array.isRequired,
  onImgClick: PropTypes.func.isRequired,
};
export default ImageGallery;
