import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  grow: {
    flexGrow: 1,
  },
});

function TopBar({classes, isAuthenticated}) {
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          React App
        </Typography>
        
        { isAuthenticated && <Button color="inherit">Logout</Button> }
      </Toolbar>
    </AppBar>
  );
}

function mapStateToProps(state) {
  return {isAuthenticated: state.isAuthenticated};
}

export default connect(mapStateToProps)(withStyles(styles)(TopBar));
