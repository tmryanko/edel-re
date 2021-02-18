import React from 'react';
import { GalleryCardCont } from './style';

const GalleryCard = ({ image }) => {
  return (
    <GalleryCardCont>
      <img src={image} alt='' />
    </GalleryCardCont>
  );
};

export default GalleryCard;
