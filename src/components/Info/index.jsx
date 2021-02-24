import React from 'react';
import { Title, TitleCont, DivContainer } from '../../assets/style/style';
import PhoneIcon from '@material-ui/icons/Phone';
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { InfoCard, InfoCardText } from './style';
import { Divider } from '@material-ui/core';

const Info = ({ title }) => {
  return (
    <DivContainer>
      <TitleCont>
        <Title>{title}</Title>
        <Divider />
      </TitleCont>

      <InfoCard>
        <PhoneIcon
          htmlColor='#023047'
          style={{ backgroundColor: 'white', borderRadius: 50, padding: 2 }}
        />
        <InfoCardText href='+49 (0) 30 826 29 13 - 0'>
          +49 (0) 30 826 29 13 - 0
        </InfoCardText>
      </InfoCard>
      <InfoCard>
        <MailRoundedIcon
          htmlColor='#023047'
          style={{ backgroundColor: 'white', borderRadius: 50, padding: 2 }}
        />

        <InfoCardText
          style={{ colo: 'transperent' }}
          href='malito:Office@edel-re.com'
        >
          Office@edel-re.com
        </InfoCardText>
      </InfoCard>
      <InfoCard>
        <LocationOnIcon
          htmlColor='#023047'
          style={{ backgroundColor: 'white', borderRadius: 50, padding: 2 }}
        />
        <InfoCardText>
          sales office: Brandenburgische Straße 86-87, D-10713 Berlin, Germany
        </InfoCardText>
      </InfoCard>
    </DivContainer>
  );
};

export default Info;
