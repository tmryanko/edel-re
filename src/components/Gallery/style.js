import styled from 'styled-components';

export const GalleryCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;
  width: 95%;
  gap: 55px;
  margin: 50px;
  @media (max-width: 768px) {
    width: 97%;
    gap: 0px;
    padding: 5px;
  }
`;
