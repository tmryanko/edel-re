import styled from 'styled-components';
import Rating from '@material-ui/lab/Rating';

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
    justify-content: space-evenly;
  }
`;
export const RankingStar = styled.div`
  display: flex;
  //   flex-direction: row;
  align-items: center;
`;
export const MuiRating = styled(Rating)`
  &.MuiRating-root.Mui-disabled {
    opacity: 1;
  }
`;
