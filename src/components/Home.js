import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Chat from './Chat';

function Home({ token, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => !!token
        ? <Chat />
        : <Redirect to="/login" /> } />
  )
}

function mapStateToProps(state) {
  return { token: state.token };
}

export default connect(mapStateToProps)(Home);
