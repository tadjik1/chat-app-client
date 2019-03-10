import client from '../network';

export const LoginRequest = Symbol('LoginRequest');
export const LoginFailure = Symbol('LoginFailure');
export const LoginSuccess = Symbol('LoginSuccess');

export function login({email, password}) {
  return (dispatch, getState) => {
    dispatch({type: LoginRequest});
    
    client.post('/api/login', {
      email, password
    }).then(response => {
      dispatch({type: LoginSuccess});
    }).catch(error => {
      dispatch({type: LoginFailure});
    });
  }
}

export const RegisterRequest = Symbol('RegisterRequest');
export const RegisterFailure = Symbol('RegisterFailure');
export const RegisterSuccess = Symbol('RegisterSuccess');

export function register({email, name, password}) {
  return (dispatch, getState) => {
    dispatch({type: RegisterRequest});
    
    client.post('/api/register', {
      email, name, password
    }).then(response => {
      dispatch({type: RegisterSuccess});
    }).catch(error => {
      dispatch({type: RegisterFailure});
    });
  }
}
