import styled from 'styled-components';

export const AboutUsCont = styled.div`
    display: flex;
    @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 768px) {
    position: relative;
    justify-content: center;
    align-self: center;
    
  }
}
`;

export const AboutUsImg = styled.img`
  // height: 90%;
  width: 95%;
  @media (max-width: 768px) {
    height: 90%;
    width: 100%;
  }
`;

export const AboutUsText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 40px;

  display: flex;
  align-items: center;
  letter-spacing: 0.4px;

  color: #023047;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 25px;
    width: 95%;
    margin-top: 10px;
  }
  @media (min-width: 768px) and (max-width: 1100px) {
    font-size: 16px;
    position: absolute;
    top: 50px;
    right: 0;
    left: 80px;
    width: 58%;
  }

  @media (min-width: 1100px) {
    font-size: 24px;
    position: absolute;
    top: 50px;
    right: 0;
    left: 80px;
    width: 45%;
  }
`;
