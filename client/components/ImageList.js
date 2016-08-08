import React from 'react';
import ImageDetail from './ImageDetail';

const ImageList = (props) => {
  const validImages = props.images.filter(image => !image.is_album);
  const Images = props.images.map(validImages =>
    <ImageDetail key={images.title} image={images.link} />
  );

  return (
    <ul className="media-list list-group">
      {Images}
    </ul>
  );
};

export default ImageList;
