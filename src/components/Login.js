import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import Form from './Form';
import { login } from '../store/actions';

const fields = [
  {type: 'email', name: 'email', placeholder: 'email', icon: 'fa-at'},
  {type: 'password', name: 'password', placeholder: 'password', icon: 'fa-key'},
];

function Login({token, login, loginAction}) {
  if (token) return <Redirect to="/" />;
  
  function onSubmit(event, fields) {
    event.preventDefault();
    if (login.processing) return;
  
    loginAction(fields);
  }
  
  return (
    <Form
      disabled={login.processing}
      title="Sign In"
      validated={login.errors}
      error={login.error}
      onSubmit={onSubmit}
      fields={fields}
      button="Login"
      Footer={() => (
        <p>Not a member?&nbsp;
          <Link to="/register">Sign Up</Link>
        </p>
      )} />
  );
}

function mapStateToProps(state) {
  return { login: state.login, token: state.token };
}

const mapDispatchToProps = { loginAction: login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);