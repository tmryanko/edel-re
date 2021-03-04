import styled from 'styled-components';
import Rating from '@material-ui/lab/Rating';

export const RankContainer = styled.div`
  cursor: pointer;
  align-self: center;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  border-radius: 10px;
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
export const RightContainer = styled.div`
  margin-left: 6px;
`;
