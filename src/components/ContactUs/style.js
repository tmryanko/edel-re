import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

export const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  // gap: 20px;
  padding: 10px;
  align-self: center;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 10px;
  width: 14%;
  @media (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 83%;
  }
`;
export const MyButton = styled(Button)`
  width: 50%;
  align-self: center;
  &.MuiButton-contained {
    background-color: #023047;
    color: white;
  }
  &.MuiButtonBase-root {
    margin: 10px 0px;
  }
`;
export const MyTextField = styled(TextField)`
  // width: 75%;
  margin: 10px 0px !important;
`;
