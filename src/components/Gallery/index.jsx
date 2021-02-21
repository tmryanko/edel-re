import React, { useState, useEffect } from 'react';
import Zoom from '@material-ui/core/Zoom';

import { DivContainer } from '../../assets/style/style';
import GalleryCard from '../GalleryCard';
import { GalleryCont } from './style';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';

const Gallery = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [show]);
  const handleScroll = () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 1200) {
      setShow(true);
    }
  };
  return (
    <DivContainer>
      <GalleryCont>
        <Zoom in={show} mountOnEnter timeout={1000}>
          <div>
            <GalleryCard image={image1} />
          </div>
        </Zoom>
        <Zoom in={show} mountOnEnter timeout={2000}>
          <div>
            <GalleryCard image={image2} />
          </div>
        </Zoom>
        <Zoom in={show} mountOnEnter timeout={3000}>
          <div>
            <GalleryCard image={image3} />
          </div>
        </Zoom>
        <Zoom in={show} mountOnEnter timeout={4000}>
          <div>
            <GalleryCard image={image4} />
          </div>
        </Zoom>
        <Zoom in={show} mountOnEnter timeout={5000}>
          <div>
            <GalleryCard image={image5} />
          </div>
        </Zoom>
        <Zoom in={show} mountOnEnter timeout={6000}>
          <div>
            <GalleryCard image={image6} />
          </div>
        </Zoom>
      </GalleryCont>
    </DivContainer>
  );
};

export default Gallery;
