import styled from 'styled-components';

export const GalleryCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;
  width: 80%;
  gap: 50px;
  padding: 50px;
  @media (max-width: 768px) {
    width: 98%;
    gap: 10px;
    padding: 10px;
  }
`;
