import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import Form from './Form';
import { register } from '../store/actions';

const fields = [
  {type: 'email', name: 'email', placeholder: 'email', icon: 'fa-at'},
  {type: 'text', name: 'name', placeholder: 'name', icon: 'fa-user'},
  {type: 'password', name: 'password', placeholder: 'password', icon: 'fa-key'},
];

function Register({registration, registerAction}) {
  if (registration.complete) return <Redirect to="/registered" />;
  
  function onSubmit(event, fields) {
    event.preventDefault();
    if (registration.processing) return;
  
    registerAction(fields);
  }
  
  return (
    <Form
      disabled={registration.processing}
      title="Sign Up"
      validated={registration.errors}
      errors={registration.errors}
      onSubmit={onSubmit}
      fields={fields}
      button="Create an account"
      Footer={() => (
        <p>Already have an account?&nbsp;
          <Link to="/login">Sign In</Link>
        </p>
      )} />
  );
}

function mapStateToProps(state) {
  return { registration: state.registration };
}

const mapDispatchToProps = { registerAction: register };

export default connect(mapStateToProps, mapDispatchToProps)(Register);

