import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { auth } from '../config/fbConfig';

interface Props {
  isAdmin: boolean,
};

const SignIn: React.FC<Props> = ({ isAdmin }) => {
  const initState = {
    email: '',
    password: '',
  };
  const [state, setState] = useState(initState);
  const classes = useStyles();

  if (isAdmin) {
    return <Redirect to='/admin' />
  }

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await auth.signInWithEmailAndPassword(state.email, state.password);
    setState(initState);
  };

  return (<>
    <div className={classes.container}>
      <Paper className={classes.papserContainer}>
        <form onSubmit={submitHandler}>
          <Grid container>
            <Grid item xs={1} />
            <Grid item xs={10}>
              <TextField
                onChange={changeHandler}
                value={state.email}
                name="email"
                type="email"
                label="Email"
                id="email"
                fullWidth
                inputProps={{ className: classes.inp }}
                InputLabelProps={{ className: classes.inpLabel }}
              />
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={1} />
            <Grid item xs={10}>
              <TextField
                onChange={changeHandler}
                value={state.password}
                type="password"
                name="password"
                label="Password"
                id="password"
                fullWidth
                inputProps={{ className: classes.inp }}
                InputLabelProps={{ className: classes.inpLabel }}
              />
            </Grid>
          </Grid>
          <div className={classes.submitBtnContainer}>
            <Button variant='contained' className={classes.submitBtn} type="submit">Log In</Button>
          </div>
        </form>
      </Paper>
    </div>
  </>);
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  papserContainer: {
    padding: '1rem',
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
    },
    backgroundColor: '#2F5D62',
  },
  submitBtnContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1rem auto',
  },
  submitBtn: {
    fontFamily: 'Source Sans Pro',
    backgroundColor: '#ef6f6c',
  },
  inpLabel: {
    fontSize: 30,
    fontFamily: 'Source Sans Pro',
    marginTop: '10px',
  },
  inp: {
    fontFamily: 'Source Sans Pro',
    marginTop: '20px',
  },
}));

export default SignIn;