import React from 'react';
import { DivContainer } from '../../assets/style/style';
import { RankContainer, RankingStar } from './style';
import google from '../../assets/images/google.svg';

import Rating from '@material-ui/lab/Rating';

const Rank = () => {
  const handleRankClick = () => {
    window.open('https://goo.gl/maps/gAfyqEX5UHxyhaTL6');
  };
  return (
    <DivContainer>
      <RankContainer onClick={handleRankClick}>
        <img src={google} alt='' />
        <div>
          <div>Google Bewertung</div>
          <RankingStar>
            <div>4.5</div>
            <Rating
              disabled
              name='size-medium'
              defaultValue={4.5}
              precision={0.5}
            />
          </RankingStar>
        </div>
      </RankContainer>
    </DivContainer>
  );
};

export default Rank;
