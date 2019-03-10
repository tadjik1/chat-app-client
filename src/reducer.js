import {
  LoginRequest, LoginSuccess, LoginFailure,
  RegisterRequest, RegisterSuccess, RegisterFailure,
} from './actions/auth';

const initialState = {
  isAuthenticated: false,
};

export default function reducer(state = initialState, action) {
  return state;
}
