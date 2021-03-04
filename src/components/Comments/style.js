import styled from 'styled-components';

export const CommentsCont = styled.div`
  align-self: center;
  width: 45%;
  //   margin: 5px;
  //   padding: 5px;

  @media (max-width: 768px) {
    width: 95%;
  }
  @media (min-width: 768px) and (max-width: 1250px) {
    width: 65%;
  }
`;
