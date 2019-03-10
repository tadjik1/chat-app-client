import React from 'react';
import Fab from '@material-ui/core/Fab';

import styles from './styles';
import withStyles from '@material-ui/core/styles/withStyles';

function SocialButtons({classes}) {
  return (
    <div className={classes.socialButtons}>
      <Fab variant="extended" color="primary" aria-label="Delete" className={classes.fab}>
        Twitter
      </Fab>
      <Fab variant="extended" color="primary" aria-label="Delete" className={classes.fab}>
        Github
      </Fab>
      <Fab variant="extended" color="primary" aria-label="Delete" className={classes.fab}>
        Facebook
      </Fab>
      <Fab variant="extended" color="primary" aria-label="Delete" className={classes.fab}>
        VK
      </Fab>
    </div>
  );
}

export default withStyles(styles)(SocialButtons);
