import styled from 'styled-components';

export const RankContainer = styled.div`
  cursor: pointer;
  align-self: center;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 12%;
  padding: 10px;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 69%;
  }
`;
export const RankingStar = styled.div`
  display: flex;
  //   flex-direction: row;
  align-items: center;
`;
