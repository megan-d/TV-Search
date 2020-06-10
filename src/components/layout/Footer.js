import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        {/* <Typography variant="h2" component="h1" gutterBottom>
  
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          
        </Typography> */}
        {/* <Typography variant="body1"></Typography> */}
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body2">TV Search</Typography>
          <Typography variant="body2">Data obtained from TVmaze: <a href="https://www.tvmaze.com/api">TVmaze API</a></Typography>
        </Container>
      </footer>
    </div>
  );
}