import React from 'react';
import { Title, DivContainer, TitleCont } from '../../assets/style/style';
import GalleryCard from '../GalleryCard';
import { GalleryCont } from './style';
import image1 from './images/image1.svg';
import image2 from './images/image2.svg';
import image3 from './images/image3.svg';
import image4 from './images/image4.svg';
import image5 from './images/image5.svg';
import image6 from './images/image6.svg';
import { Divider } from '@material-ui/core';

const Gallery = () => {
  return (
    <DivContainer>
      {/* <TitleCont>
        <Title>Gallery</Title>
        <Divider />
      </TitleCont> */}
      <GalleryCont>
        <GalleryCard image={image1} />
        <GalleryCard image={image2} />
        <GalleryCard image={image3} />
        <GalleryCard image={image4} />
        <GalleryCard image={image5} />
        <GalleryCard image={image6} />
      </GalleryCont>
    </DivContainer>
  );
};

export default Gallery;
