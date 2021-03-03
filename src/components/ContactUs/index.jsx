import React from 'react';
import emailjs from 'emailjs-com';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';

import { MyForm, MyButton, MyTextField } from './style';
import { useState } from 'react';

const ContactUS = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [openSnack, setOpenSnack] = useState(false);
  const handleCloseSnack = () => {
    setOpenSnack(false);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it
    emailjs
      .sendForm(
        'service_k3xpb5l',
        'template_awe9cwr',
        e.target,
        'user_TOv9SUyyuHGF3GaomKGhi',
      )
      .then(
        (result) => {
          setOpenSnack(true);
          setDetails('');
          setEmail('');
          setName('');
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <>
      <MyForm onSubmit={handleFormSubmit}>
        <MyTextField
          required
          name='name'
          id='name'
          label='NAME'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <MyTextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          name='email'
          id='email'
          label='EMAIL'
          type='email'
        />
        <TextField
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          name='more_details'
          id='more_details'
          label='Nachricht'
          multiline
          rows={4}
          variant='outlined'
        />
        <MyButton type='submit' variant='contained'>
          SENDEN
        </MyButton>
      </MyForm>
      <Snackbar
        open={openSnack}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
      >
        <Alert onClose={handleCloseSnack} severity='success' variant='filled'>
          message sent successfully
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactUS;
