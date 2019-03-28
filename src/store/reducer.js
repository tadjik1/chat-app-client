import {
  ConfirmFailure,
  ConfirmRequest,
  ConfirmSuccess,
  LoginFailure,
  LoginRequest,
  LoginSuccess,
  OAuthCallbackFailure,
  OAuthCallbackRequest,
  OAuthCallbackSuccess,
  OAuthFailure,
  OAuthRequest,
  RegisterFailure,
  RegisterRequest,
  RegisterSuccess,
  FetchMessagesSuccess, FetchMessagesRequest
} from './actions';
import {WebsocketConnected, WebsocketDisconnected} from '../components/Chat';

const token = localStorage.getItem('token') || null;

const initialState = {
  token,
  login: {
    error: null,
    processing: false,
  },
  registration: {
    errors: null,
    processing: false,
    complete: false,
  },
  confirmation: {
    error: null,
    processing: false,
  },
  oauth: {
    error: null,
    processing: false,
  },
  oauthCallback: {
    error: null,
    processing: false,
  },
  isWebsocketConnected: false,
  messages: {
    fetching: true,
    list: []
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LoginRequest:
      return {
        ...state,
        login: { ...initialState.login, processing: true }
      };
    case LoginSuccess:
      localStorage.setItem('token', action.token);
      return {
        ...state,
        login: initialState.login,
        token: action.token
      };
    case LoginFailure:
      return {
        ...state,
        login: { ...initialState.login, error: action.error, processing: false }
      };
    case RegisterRequest:
      return {
        ...state,
        registration: { ...initialState.registration, processing: true }
      };
    case RegisterSuccess:
      return {
        ...state,
        registration: { ...initialState.registration, processing: false, complete: true, }
      };
    case RegisterFailure:
      return {
        ...state,
        registration: { ...initialState.registration, errors: action.errors, processing: false }
      };
    case ConfirmRequest:
      return {
        ...state,
        confirmation: { ...initialState.confirmation, processing: true }
      };
    case ConfirmSuccess:
      localStorage.setItem('token', action.token);
      return { ...state, confirmation: initialState.confirmation, token: action.token };
    case ConfirmFailure:
      return {
        ...state,
        confirmation: { ...initialState.confirmation, error: action.error, processing: false }
      };
    case OAuthRequest:
      return {
        ...state,
        oauth: { ...initialState.oauth, processing: true }
      };
    case OAuthFailure:
      return {
        ...state, oauth: { ...initialState.oauth, error: action.error, processing: false }
      };
    case OAuthCallbackRequest:
      return {
        ...state,
        oauthCallback: { ...initialState.oauthCallback, processing: true }
      };
    case OAuthCallbackFailure:
      return {
        ...state,
        oauthCallback: { ...initialState.oauthCallback, error: action.error, processing: false }
      };
    case OAuthCallbackSuccess:
      localStorage.setItem('token', action.token);
      return { ...state, oauthCallback: initialState.oauthCallback, token: action.token };
    case FetchMessagesRequest:
      return {
        ...state,
        messages: {
          ...state.messages,
          fetching: true
        }
      };
    case FetchMessagesSuccess:
      return {
        ...state,
        messages: {
          ...state.messages,
          list: action.messages.concat(state.messages),
          fetching: false
        }
      };
    case WebsocketConnected:
      return { ...state, isWebsocketConnected: true };
    case WebsocketDisconnected:
      return { ...state, isWebsocketConnected: false };
    default:
      return state;
  }
}