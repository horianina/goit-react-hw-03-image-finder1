import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import { ImageGalleryContainer } from './ImageGalleryStyled';

const ImageGallery = ({ articles }) => {
  // const { articles } = this.state;
  return (
    <ImageGalleryContainer>
      <ul className="ImageGallery">
        {articles.length > 0 &&
          articles.map(article => (
            <ImageGalleryItem
              key={article.id}
              {...article}
              src={article.webformatURL}
            />
          ))}
      </ul>
    </ImageGalleryContainer>
  );
};
export default ImageGallery;
