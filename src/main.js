import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

let history = createBrowserHistory();


ReactDOM.render((
  <Router history={history} routes={routes} />
), document.getElementById('app'));
