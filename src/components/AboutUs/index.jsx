import React from 'react';
import { Title, TitleCont, DivContainer } from '../../assets/style/style';
import { Divider } from '@material-ui/core';
import Img from '../../assets/images/about.jpg';

import { AboutUsCont, AboutUsImg, AboutUsText } from './style';

const AboutUs = ({ title, lang }) => {
  const TEXT = {
    English: {
      about: `
      EDEL Real Estate Gmbh is an established company in the real estate business. This is our passion, so we work around the clock for buyers and sellers to accommodate their best interests. Over the years we have accumulated great experience in the sector to meet the needs of various kinds of investors.

Our areas of expertise are acquisition, management, brokerage and sale of real estate all over Germany.
      `,
    },
    Deutschland: {
      about: `
      Die EDEL Real Estate Gmbh ist ein etabliertes Unternehmen in der Immobilienbranche. Dieses Geschäft ist unsere Leidenschaft und deshalb arbeiten wir rund um die Uhr für Käufer und Verkäufer, um ihren Interessen bestmöglich gerecht zu werden. Über die Jahre hinaus haben wir große Erfahrungen in der Immobilienbranche gesammelt, um gezielt auf den Bedürfnissen der verschiedenen Investoren einzugehen.

Unsere Schwerpunkte liegen in den Bereichen des Ankaufs, Verkauf, der Vermietung und der Vermögensverwaltung.


      `,
    },
  };
  return (
    <DivContainer>
      <TitleCont>
        <Title>{title}</Title>
        <Divider variant='middle' />
      </TitleCont>
      <AboutUsCont>
        <AboutUsImg src={Img} alt='' />
        <AboutUsText>{TEXT[lang].about}</AboutUsText>
      </AboutUsCont>
    </DivContainer>
  );
};

export default AboutUs;
