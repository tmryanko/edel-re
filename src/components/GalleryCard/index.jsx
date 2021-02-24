import React from 'react';
import { GalleryCardCont, GalleryImg } from './style';

const GalleryCard = ({ image }) => {
  return (
    <GalleryCardCont>
      <GalleryImg src={image} alt='' />
    </GalleryCardCont>
  );
};

export default GalleryCard;
