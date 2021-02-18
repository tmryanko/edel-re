import React from 'react';
import { CardContainer, CardName, CardText } from './style';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const CommentCard = ({ text, name }) => {
  return (
    <CardContainer>
      <FormatQuoteIcon htmlColor='#023047' />

      <CardText>{text}</CardText>
      <CardName>{name}</CardName>
    </CardContainer>
  );
};

export default CommentCard;
