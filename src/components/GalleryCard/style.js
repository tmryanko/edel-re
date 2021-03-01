import styled from 'styled-components';

export const GalleryCardCont = styled.div`
  box-sizing: border-box;
  height: 456px;
  width: 646px;
  margin: 10px;
  transition: transform 0.5s ease;
  @media (min-width: 768px) and (max-width: 1415px) {
    height: 406px;
    width: 540px;
    margin: 5px;
  }
  @media (max-width: 768px) {
    height: 146px;
    width: 170px;
    margin: 2px;
  }
  @media (min-width: 768px) {
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const GalleryImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 15px;
`;
