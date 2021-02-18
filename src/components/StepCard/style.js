import styled from 'styled-components';

export const ImgCont = styled.div`
  height: 250px;
  width: 250px;

  @media (max-width: 768px) {
    // padding: 100px;
    height: 150px;
    width: 150px;
  }
`;

export const SpansCont = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 30px;
  letter-spacing: 0.4px;
  text-align: center;
  color: #5c677d;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 18px;
  }
`;
export const StepCardCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
`;
