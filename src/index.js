import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import store from './store';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Registered from './components/Registered';
import Confirm from './components/Confirm';
import OAuthCallback from './components/OAuthCallback';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/registered" component={Registered} />
      <Route path="/confirm/:verificationToken" component={Confirm} />
      <Route path="/oauth/:provider" component={OAuthCallback} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
