import React from 'react';
import Image from 'gatsby-image';
import { ImageGalleryWrapper } from './styles';
import ImageThumbnail from './ImageThumbnail';
export const ImageGallery = ({ images }) => {
  const [activeImageThumbnail, seactiveImageThumbnail] = React.useState(
    images[0]
  );
  const handleClick = image => {
    seactiveImageThumbnail(image);
  };
  return (
    <ImageGalleryWrapper>
      <div>
        <Image fluid={activeImageThumbnail.localFile.childImageSharp.fluid}>
          {' '}
        </Image>
      </div>
      <div>
        {images.map(image => {
          return (
            <ImageThumbnail
              key={image.id}
              onClick={handleClick}
              image={image}
              isActive={activeImageThumbnail.id === image.id}
            ></ImageThumbnail>
          );
        })}
      </div>
    </ImageGalleryWrapper>
  );
};
