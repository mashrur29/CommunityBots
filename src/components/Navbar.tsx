import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

interface Props {
  isAdmin: boolean,
};

const Navbar: React.FC<Props> = ({ isAdmin }) => {
  const classes = useStyles();
  return (<>
    <nav>
      <AppBar variant='elevation' position="static" style={{ background: '#343a40' }}>
        <Toolbar variant='dense'>

          <Grid container>
            <Grid item xs>
              <Button color='inherit' style={{ textTransform: 'none' }} role='link' component={Link} to='/'>
                <Typography variant='h6' className={classes.fonts}>
                  <span style={{ color: "#FFFFFF" }}>CommunityBots</span>
                </Typography>
              </Button>

              <a target="_blank" rel="noopener noreferrer" href={'https://communitybots-usage.web.app/multiagent'} style={{ textDecoration: 'none' }}>
              <Button color='inherit' style={{ textTransform: 'none' }}>
                <Typography variant='h6' className={classes.fonts}>
                  <span style={{ color: "#FFFFFF" }}>Tutorial</span>
                </Typography>
              </Button>
              </a>
            </Grid>


          </Grid>

        </Toolbar>
      </AppBar>
    </nav>
  </>);
};

const useStyles = makeStyles((theme) => ({
  fonts: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    color: 'white',
  },
}));

export default Navbar;