import React from 'react';
import { CardContainer, CardName, CardText } from './style';

const CommentCard = ({ text, name }) => {
  return (
    <CardContainer>
      <CardText>{text}</CardText>
      <CardName>{name}</CardName>
    </CardContainer>
  );
};

export default CommentCard;
