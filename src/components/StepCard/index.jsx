import React from 'react';
import { SpansCont, ImgCont, StepCardCont } from './style';

const StepCard = ({ image, text }) => {
  return (
    <StepCardCont>
      <ImgCont>
        <img src={image} alt='' />
      </ImgCont>
      <SpansCont>{text}</SpansCont>
    </StepCardCont>
  );
};

export default StepCard;
