import { Box, Button, Dialog, DialogActions, DialogContent, TextField, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { Component, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MainActionType } from '../../store/main-action';
import './dialog.css';

interface ISignup {
  open: boolean;
  setOpen: Function;
}

const SignupDialog = (props: ISignup) => {
  const inStyle = useStyles();
  const dispatch = useDispatch();
  const [confirmPass, setConfirmPass] = useState('');
  const [data, setData] = useState({
    name: '',
    lastname: '',
    username: '',
    password: '',
  });

  const onChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    console.log(data);
    console.log(confirmPass);
    if (data.password !== confirmPass) {
      alert('Password is not reach the target!');
    } else {
      onSignup();
    }
  };

  const onSignup = () => {
    dispatch({ type: MainActionType.SIGN_UP_STORING, payload: data });
  };

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
          Sign up
        </p>
        <Box margin='40px 0px'>
          <TextField name='name' required label='Name' variant='outlined' autoComplete='false' onChange={onChange} />
        </Box>
        <Box>
          <TextField
            name='lastname'
            required
            label='LastName'
            variant='outlined'
            autoComplete='false'
            onChange={onChange}
          />
        </Box>
        <Box mt='40px'>
          <TextField
            name='username'
            required
            label='Username'
            variant='outlined'
            autoComplete='false'
            onChange={onChange}
          />
        </Box>
        <Box mt='40px'>
          <TextField
            name='password'
            required
            label='Password'
            type='password'
            variant='outlined'
            autoComplete='false'
            onChange={onChange}
          />
        </Box>
        <Box mt='40px'>
          <TextField
            required
            label='Confirm Password'
            type='password'
            variant='outlined'
            autoComplete='false'
            onChange={(e: any) => setConfirmPass(e.target.value)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Box
          padding='10px 20px 10px 20px'
          width='100%'
          display='flex'
          justifyContent='space-between'
          flexDirection='row'
        >
          <Button
            onClick={onSubmit}
            sx={{
              width: '100px',
              height: '38px',
              backgroundColor: '#b5c9c8',
              borderRadius: '5px',
              color: '#FFF',
              '&:hover': {
                backgroundColor: '#57838c',
                color: '#FFF',
              },
            }}
          >
            Submit
          </Button>
          <Button
            onClick={() => props.setOpen(false)}
            sx={{
              width: '100px',
              height: '38px',
              backgroundColor: '#b5c9c8',
              borderRadius: '5px',
              color: '#FFF',
              '&:hover': {
                backgroundColor: '#57838c',
                color: '#FFF',
              },
            }}
          >
            Cancel
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default SignupDialog;

const useStyles = makeStyles((theme: Theme) => ({
  dialog: {
    padding: theme.spacing(2),
  },
  dialogContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
