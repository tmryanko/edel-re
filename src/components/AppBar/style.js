import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import style from 'styled-components';

export const MyAppBar = styled(AppBar)({
  backgroundColor: '#E5E5E5',
  color: 'blue',
  boxShadow: 'none',
});

export const MyToolbar = styled(Toolbar)({
  alignSelf: 'center',
  margin: 100,
});

export const AppLogo = style.div`
  height: 180px;
  width: 180px;
  cursor: pointer;
  @media (max-width: 768px) {
    height: 160px;
    width: 140px;
  }
`;
