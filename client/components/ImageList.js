import React from 'react';
import ImageDetail from './ImageDetail';

const IMAGES = [
  {
    title: 'Pen',
    link: 'http://dummyimage.com/600x400',
  },
  {
    title: 'Pine Tree',
    link: 'http://dummyimage.com/600x400',
  },
  {
    title: 'Mug',
    link: 'http://dummyimage.com/600x400',
  },
];

const ImageList = () => {
  const Images = IMAGES.map(image =>
    <ImageDetail key={image.title} image={image} />
  );

  return (
    <ul className="media-list list-group">
      {Images}
    </ul>
  );
};

export default ImageList;
