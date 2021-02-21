import styled from 'styled-components';

export const GalleryCardCont = styled.div`
  box-sizing: border-box;
  height: 456px;
  width: 646px;
  transition: transform 0.5s ease;
  @media (max-width: 768px) {
    height: 146px;
    width: 170px;
  }
  @media (min-width: 768px) {
    &:hover {
      transform: scale(1.1);
    }
  }
`;
