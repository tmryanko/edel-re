import React from 'react';
import { DivContainer } from '../../assets/style/style';
import { RankContainer, RankingStar, MuiRating } from './style';
import google from '../../assets/images/google.png';

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
            <MuiRating
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
