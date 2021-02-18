import React from 'react';
import { useHistory } from 'react-router-dom';

import { MyAppBar, MyToolbar, AppLogo } from './style';
import Logo from '../../assets/images/logo.svg';

const AppBar = () => {
  let history = useHistory();

  const handleLogoClick = () => {
    history.push('/');
  };
  return (
    <MyAppBar position='static'>
      <MyToolbar>
        <AppLogo onClick={handleLogoClick}>
          <img src={Logo} alt='logo' />
        </AppLogo>
      </MyToolbar>
    </MyAppBar>
  );
};

export default AppBar;
