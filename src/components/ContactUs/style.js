import styled from 'styled-components';

import Button from '@material-ui/core/Button';

export const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  align-self: center;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 10px;
`;
export const MyButton = styled(Button)`
  background: #023047;
`;
