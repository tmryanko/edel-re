import React from 'react';
import EasySteps from '../../components/EasySteps';
import BgImage from '../../assets/images/top.jpg';
import ContactUS from '../../components/ContactUs';
import Gallery from '../../components/Gallery';
import Info from '../../components/Info';
import Comments from '../../components/Comments';

import { ImgCont, Img } from './style';

const HomePage = ({ lang }) => {
  const TITLES = {
    English: {
      EasySteps: '3 EASY STEPS',
      Comments: 'COMMENTS',
      ContactUs: 'CONTACT US',
    },
    Deutschland: {
      EasySteps: '3 EINFACHE SCHRITTE',
      Comments: 'KUNDEN ÜBER UNS',
      ContactUs: 'KONTAKT',
    },
  };
  return (
    <>
      <ImgCont>
        <Img height='100%' width='100%' src={BgImage} alt='logo' />
      </ImgCont>
      <EasySteps title={TITLES[lang].EasySteps} />
      <Gallery />
      <Comments title={TITLES[lang].Comments} />
      <Info title={TITLES[lang].ContactUs} />
      <ContactUS title={TITLES[lang].ContactUs} />
    </>
  );
};

export default HomePage;
