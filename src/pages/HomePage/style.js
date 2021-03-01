import styled from 'styled-components';
export const ImgCont = styled.div`
  height: 600px;
  width: 100%;
  position: relative;
  @media (max-width: 768px) {
    height: 152px;
  }
`;
export const Img = styled.img`
  //   object-fit: cover;
`;
export const Logo = styled.img`
  //   object-fit: cover;
  position: absolute;
  height: 245px;
  width: 185px;
  left: 160px;
  top: 166px;
  @media (max-width: 768px) {
    height: 50px;
    width: 40px;
    left: 44px;
    top: 42px;
  }
`;
