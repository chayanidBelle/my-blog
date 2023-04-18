import { Box, Dialog, DialogContent, TextField, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { Component, useState } from 'react';
import { useSelector } from 'react-redux';
import { store } from '../../store';
import mainReducer from '../../store/main-reducer';
import './dialog.css';

interface ILogin {
  open: boolean;
  setOpen: Function;
}

const LoginDialog = (props: ILogin) => {
  const inStyle = useStyles();
  const data = store.getState();
  console.log(data);

  return (
    <Dialog
      open={props.open}
      onClose={() => props.setOpen(false)}
      maxWidth='sm'
      scroll='paper'
      fullWidth
      className={inStyle.dialog}
    >
      <DialogContent className={inStyle.dialogContent}>
        <p className='engFont' style={{ textAlign: 'center', fontWeight: 600 }}>
          Login
        </p>
        <Box margin='40px 0px'>
          <TextField required label='Username' variant='outlined' autoComplete='false' />
        </Box>
        <Box>
          <TextField required label='Password' type='password' variant='outlined' autoComplete='false' />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;

const useStyles = makeStyles((theme: Theme) => ({
  dialog: {
    padding: theme.spacing(2),
  },
  dialogContent: {
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  typo: {
    fontFamily: 'Space Grotesk, sans-serif',
  },
}));
