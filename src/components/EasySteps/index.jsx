import React, { useEffect, useState } from 'react';
import { Slide, Zoom, Divider } from '@material-ui/core';

import StepCard from '../StepCard';
import left from '../../assets/images/leftStep.svg';
import mid from '../../assets/images/midStep.svg';
import right from '../../assets/images/rightStep.svg';
import { CardsContainer, CardCont } from './style';
import { Title, TitleCont, DivContainer } from '../../assets/style/style';

const EasySteps = ({ title, lang }) => {
  const [show, setShow] = useState(false);
  const TEXT = {
    English: {
      phone: `
      Please find your suitable property and contact us!
We’ll be happy to value yours for free.
      `,
      meeting: `
      Whether you want to sell your property, to invest in Berlin or to have a reliable partner for all the information, don’t hesitate and contact us!
`,
      sign: `We’ll guide you through every step in the process. Making it simple for you.
      `,
    },
    Deutschland: {
      phone: `
      Finden Sie jetzt Ihr neues Zuhaus und kontaktieren Sie uns. Gern bewerten wir auch Ihre Immobilie
      `,
      meeting: `Wenn Sie ihr Grundstück verkaufen, in den Berliner Immobilienmarkt investieren wollen oder nach einem verlässlichen Partner dafür suchen, Sind wir Ihre Ansprechpartner`,
      sign: `Wir begleiten Sie professionell bei jedem Schritt`,
    },
  };

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
        <Zoom direction='down' in={show} mountOnEnter timeout={1000}>
          <CardCont>
            <StepCard image={left} text={TEXT[lang].phone} />
          </CardCont>
        </Zoom>
        <Zoom in={show} mountOnEnter timeout={2000}>
          <CardCont>
            <StepCard image={mid} text={TEXT[lang].meeting} />
          </CardCont>
        </Zoom>
        <Zoom direction='up' in={show} mountOnEnter timeout={3000}>
          <CardCont>
            <StepCard image={right} text={TEXT[lang].sign} />
          </CardCont>
        </Zoom>
      </CardsContainer>
    </DivContainer>
  );
};

export default EasySteps;
