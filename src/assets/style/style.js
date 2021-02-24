import styled from 'styled-components';

export const Title = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 16px;
  letter-spacing: 0.3px;
  color: #979797;
`;
export const TitleCont = styled.div`
  width: 28%;
  align-self: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0px 50px 0px;
  @media (max-width: 768px) {
    padding: 20px 0px 20px 0px;
  }
`;
