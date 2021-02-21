import React from 'react';
import { GalleryCardCont } from './style';

const GalleryCard = ({ image }) => {
  return (
    <GalleryCardCont>
      <img
        style={{ borderRadius: '30px' }}
        height='100%'
        width='100%'
        src={image}
        alt=''
      />
    </GalleryCardCont>
  );
};

export default GalleryCard;
