import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { Title, TitleCont, DivContainer } from '../../assets/style/style';
import { Divider } from '@material-ui/core';

import { MyForm } from './style';

const ContactUS = ({ title }) => {
  const handleSubmit = () => {
    console.log('ddd');
  };

  return (
    <DivContainer>
      <TitleCont>
        <Title>{title}</Title>
        <Divider />
      </TitleCont>

      <MyForm onSubmit={handleSubmit}>
        <TextField required id='standard-required' label='NAME' />

        <TextField required id='standard-required' label='EMAIL' type='email' />
        <TextField
          id='standard-multiline-static'
          label='text'
          multiline
          rows={4}
        />
        <Button type='submit' variant='contained'>
          SEND
        </Button>
      </MyForm>
    </DivContainer>
  );
};

export default ContactUS;
