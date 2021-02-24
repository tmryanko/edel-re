import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  // align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;

export const CardCont = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
