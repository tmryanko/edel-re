import React from 'react';
import TextField from '@material-ui/core/TextField';

import { DivContainer } from '../../assets/style/style';

import { MyForm, MyButton } from './style';

const ContactUS = () => {
  const handleSubmit = () => {
    console.log('ddd');
  };

  return (
    <DivContainer>
      <MyForm onSubmit={handleSubmit}>
        <TextField required id='standard-required' label='NAME' />

        <TextField required id='standard-required' label='EMAIL' type='email' />
        <TextField
          id='standard-multiline-static'
          label='Nachricht'
          multiline
          rows={4}
          variant='outlined'
        />
        <MyButton type='submit' variant='contained'>
          SENDEN
        </MyButton>
      </MyForm>
    </DivContainer>
  );
};

export default ContactUS;
