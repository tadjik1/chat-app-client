import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducer';

const loggerMiddleware = createLogger();

export default createStore(
  reducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
