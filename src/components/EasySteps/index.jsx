import React, { useEffect, useState } from 'react';
import { Slide, Zoom, Divider } from '@material-ui/core';

import StepCard from '../StepCard';
import left from '../../assets/images/leftStep.svg';
import mid from '../../assets/images/midStep.svg';
import right from '../../assets/images/rightStep.svg';
import { CardsContainer, CardCont } from './style';
import { Title, TitleCont, DivContainer } from '../../assets/style/style';

const EasySteps = ({ title }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log(window.pageYOffset);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [show]);

  const handleScroll = () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 200) {
      setShow(true);
    }
  };

  return (
    <DivContainer>
      <TitleCont>
        <Title>{title}</Title>
        <Divider variant='middle' />
      </TitleCont>

      <CardsContainer>
        <Slide direction='right' in={show} mountOnEnter timeout={1000}>
          <CardCont>
            <StepCard
              image={left}
              text='Finden Sie jetzt Ihr neues Zuhaus und kontaktieren Sie uns. Gern bewerten wir auch Ihre Immobilie'
            />
          </CardCont>
        </Slide>
        <Zoom in={show} mountOnEnter timeout={1000}>
          <CardCont>
            <StepCard
              image={mid}
              text='Wenn Sie ihr Grundstück verkaufen, in den Berliner Immobilienmarkt investieren wollen oder nach einem verlässlichen Partner dafür suchen, Sind wir Ihre Ansprechpartner'
            />
          </CardCont>
        </Zoom>
        <Slide direction='left' in={show} mountOnEnter timeout={1000}>
          <CardCont>
            <StepCard
              image={right}
              text='Wir begleiten Sie professionell bei jedem Schritt'
            />
          </CardCont>
        </Slide>
      </CardsContainer>
    </DivContainer>
  );
};

export default EasySteps;
