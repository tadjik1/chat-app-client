import React from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import TopBar from './TopBar';
import Form from './Form';
import Chat from './Chat';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

function App({classes, isAuthenticated}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <TopBar />
      <main className={classes.root}>
        <Grid container spacing={24} justify="center" alignItems="center">
          {isAuthenticated
            ? <Chat />
            : <Form /> }
        </Grid>
      </main>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {isAuthenticated: state.isAuthenticated};
}

export default connect(mapStateToProps)(withStyles(styles)(App));
