import React from 'react';
import { Title, TitleCont, DivContainer } from '../../assets/style/style';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { InfoCard } from './style';
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
        <div>+49 (0) 30 826 29 13 - 0</div>
      </InfoCard>
      <InfoCard>
        <MailRoundedIcon
          htmlColor='#023047'
          style={{ backgroundColor: 'white', borderRadius: 50, padding: 2 }}
        />
        <div>Office@edel-re.com</div>
      </InfoCard>
      <InfoCard>
        <LocationOnIcon
          htmlColor='#023047'
          style={{ backgroundColor: 'white', borderRadius: 50, padding: 2 }}
        />
        <div>
          sales office: Brandenburgische Straße 86-87, D-10713 Berlin, Germany
        </div>
      </InfoCard>
    </DivContainer>
  );
};

export default Info;
