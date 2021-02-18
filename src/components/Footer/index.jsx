import React from 'react';
import FooterLogo from '../../assets/images/footerLogo.svg';
import {
  MyAppBar,
  MyToolbar,
  TollbarText,
  TextLinks,
  LinksContainer,
  FootLogo,
  MyButton,
  ButtonsCont,
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
        </TextLinks>
      </MyToolbar>
    </MyAppBar>
  );
};

export default index;
