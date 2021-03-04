import React from 'react';
import FooterLogo from '../../assets/images/footerLogo.svg';
import Facebook from '../../assets/images/facebook.png';
import Linkedn from '../../assets/images/linkedin.png';
import Instagram from '../../assets/images/instagram.svg';
import {
  MyAppBar,
  MyToolbar,
  TollbarText,
  TextLinks,
  LinksContainer,
  FootLogo,
  MyButton,
  ButtonsCont,
  IconsContainer,
  Img,
} from './style';

const index = () => {
  return (
    <MyAppBar position='static' color='primary'>
      <MyToolbar>
        <FootLogo>
          <img src={FooterLogo} alt='' />
        </FootLogo>
        <TextLinks>
          <TollbarText>© 2021 - EDEL real estate GmbH</TollbarText>
          <LinksContainer>
            <ButtonsCont>
              <MyButton href='/Terms' color='primary'>
                Datenschutz
              </MyButton>
              <MyButton href='/Impressum' color='primary'>
                Impressum
              </MyButton>
            </ButtonsCont>
            <ButtonsCont>
              <MyButton
                href='https://www.immobilienscout24.de/anbieter/edel-real-estate-gmbh/a784903773e5aed7405977b'
                target='_blank'
                color='primary'
              >
                Immobilienscout24
              </MyButton>
              <MyButton
                href='https://www.immowelt.de/profil/f6e8483284fc4fae9f6ffc45c37d8696'
                target='_blank'
                color='primary'
              >
                immowelt
              </MyButton>
            </ButtonsCont>
          </LinksContainer>
          <IconsContainer>
            <a
              href='https://www.facebook.com/EDELGMBH'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Img src={Facebook} alt='' />
            </a>
            <a
              href='https://www.instagram.com/edel_real_estate/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Img src={Instagram} alt='' />
            </a>
            <a
              href='https://www.linkedin.com/company/grand-urban-immobilien-group-guig-gmbh/about/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Img src={Linkedn} alt='' />
            </a>
          </IconsContainer>
        </TextLinks>
      </MyToolbar>
    </MyAppBar>
  );
};

export default index;
