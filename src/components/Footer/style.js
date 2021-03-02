import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import style from 'styled-components';
import Button from '@material-ui/core/Button';

export const MyAppBar = styled(AppBar)({
  backgroundColor: '#E5E5E5',
  color: '#4BB5AF',
  boxShadow:
    '0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)',
});

export const MyToolbar = styled(Toolbar)({
  margin: '20px 80px 20px 80px',
  justifyContent: 'space-between',

  '@media (max-width:780px)': {
    flexDirection: 'column',
  },
});

export const IconsContainer = style.div`
  display: flex;
  gap: 5px;
`;
export const IconContainer = style.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border: 1px solid #4BB5AF;
  border-radius: 50%;
`;
export const LinksContainer = style.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 68%;
  }
`;

export const FootLogo = style.div`
  height: 100px;
  width: 100px;
  @media (max-width: 768px) {
    height: 60px;
    width: 40px;
  }
`;
export const TollbarText = style.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #023047;
  
`;
export const TextLinks = style.div`
  width: 100%;
  display: flex;
  // color: #023047;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
export const MyButton = style(Button)`
  &.MuiButton-textPrimary{
    color: #023047;
  }
  
`;
export const ButtonsCont = style.div`
display: flex;
@media (max-width: 768px) {
  flex-direction: column;
}
`;
