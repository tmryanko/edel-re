import React from 'react';
import { CardContainer, CardName, CardText } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const CommentCard = ({ text, name }) => {
  return (
    <CardContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <FontAwesomeIcon
          flip='horizontal'
          icon={faQuoteRight}
          color='#ffffff'
        />
        <FontAwesomeIcon icon={faQuoteRight} color='#ffffff' />
      </div>
      <CardText>{text}</CardText>
      <CardName>{name}</CardName>
    </CardContainer>
  );
};

export default CommentCard;
