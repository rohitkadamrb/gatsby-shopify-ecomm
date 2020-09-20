import React from 'react';
import Image from 'gatsby-image';
import { ImageGalleryWrapper } from './styles';
import ImageThumbnail from './ImageThumbnail';
export const ImageGallery = ({ selectedVariantImageId, images }) => {
  const [activeImageThumbnail, setactiveImageThumbnail] = React.useState(
    images.find(({ id }) => id === selectedVariantImageId) || images[0]
  );

  React.useEffect(() => {
    setactiveImageThumbnail(
      images.find(({ id }) => id === selectedVariantImageId) || images[0]
    );
  }, [selectedVariantImageId, images, setactiveImageThumbnail]);

  const handleClick = image => {
    setactiveImageThumbnail(image);
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
