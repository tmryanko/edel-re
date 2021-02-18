import React from 'react';
import Button from '@material-ui/core/Button';
import FooterLogo from '../../assets/images/footerLogo.svg';
import {
  MyAppBar,
  MyToolbar,
  IconsContainer,
  IconContainer,
  TollbarText,
  TextLinks,
  LinksContainer,
  FootLogo,
} from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

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
            <Button href='/Terms' color='primary'>
              Terms
            </Button>
            <Button href='/Impressum' color='primary'>
              Impressum
            </Button>
            <Button
              href='https://www.immobilienscout24.de/anbieter/edel-real-estate-gmbh/a784903773e5aed7405977b'
              target='_blank'
              color='primary'
            >
              Immobilienscout24
            </Button>
            <Button
              href='https://www.immowelt.de/profil/f6e8483284fc4fae9f6ffc45c37d8696'
              target='_blank'
              color='primary'
            >
              immowelt
            </Button>
          </LinksContainer>
        </TextLinks>
      </MyToolbar>
    </MyAppBar>
  );
};

export default index;
