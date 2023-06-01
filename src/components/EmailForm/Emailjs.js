import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, TextField } from '@mui/material';
import "./style.css"

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e3eqj45', 'template_dpzkomg', form.current, 'IFxc191pqjIcojhEc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>

      <label>Name</label>
      <TextField type="text" name="user_name" />

      <label>Email</label>
      <TextField type="email" name="user_email" />

      <label>Message</label>
      <TextField name="message"/>

      <Button>
      <TextField type="submit" value="Send" />
      </Button>

    </form>
  );
};