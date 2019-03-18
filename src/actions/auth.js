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
      dispatch({type: LoginSuccess, token: response.data.token});
    }).catch(error => {
      dispatch({type: LoginFailure, error: error.response.data.error});
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
      dispatch({type: RegisterFailure, errors: error.response.data.errors});
    });
  }
}

export const ConfirmRequest = Symbol('ConfirmRequest');
export const ConfirmFailure = Symbol('ConfirmFailure');
export const ConfirmSuccess = Symbol('ConfirmSuccess');

export function confirm({verificationToken}) {
  return (dispatch, getState) => {
    dispatch({type: ConfirmRequest});
    
    client.post('/api/confirm', {
      verificationToken
    }).then(response => {
      dispatch({type: ConfirmSuccess, token: response.data.token});
    }).catch(error => {
      dispatch({type: ConfirmFailure, error: error.response.data.error});
    });
  }
}

export const OAuthRequest = Symbol('OAuthRequest');
export const OAuthFailure = Symbol('OAuthFailure');

export function oauth({provider}) {
  return (dispatch, getState) => {
    dispatch({type: OAuthRequest});
    
    client.post('/api/oauth', {
      provider
    }).then(response => {
      window.location.href = response.data.location;
    }).catch(error => {
      dispatch({type: OAuthFailure, error: error.response.data.error});
    });
  }
}

export const OAuthCallbackRequest = Symbol('OAuthCallbackRequest');
export const OAuthCallbackFailure = Symbol('OAuthCallbackFailure');
export const OAuthCallbackSuccess = Symbol('OAuthCallbackSuccess');

export function oauthCallback({provider, code}) {
  return (dispatch, getState) => {
    dispatch({type: OAuthCallbackRequest});
    
    client.post('/api/oauth_callback', {
      provider, code
    }).then(response => {
      dispatch({type: OAuthCallbackSuccess, token: response.data.token});
    }).catch(error => {
      dispatch({type: OAuthCallbackFailure, error: error.response.data.error});
    });
  }
}
