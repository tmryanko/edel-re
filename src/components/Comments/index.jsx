import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Title, TitleCont, DivContainer } from '../../assets/style/style';
import { Divider } from '@material-ui/core';
import CommentCard from '../CommentCard';
import { CommentsCont } from './style.js';
import { COMMENTS_LIST } from './commets';

const Comments = ({ title }) => {
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  return (
    <DivContainer>
      <TitleCont>
        <Title>{title}</Title>
        <Divider />
      </TitleCont>
      <CommentsCont>
        <AutoPlaySwipeableViews interval={6000}>
          {COMMENTS_LIST.map((comment) => {
            return <CommentCard name={comment.name} text={comment.text} />;
          })}
          {/* <CommentCard name='Angela. K' text='text 1' />
          <CommentCard name='name' text='text 2' />
          <CommentCard name='name' text='text 3' /> */}
        </AutoPlaySwipeableViews>
      </CommentsCont>
    </DivContainer>
  );
};

export default Comments;
