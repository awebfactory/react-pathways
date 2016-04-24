import React from 'react';
import ReactDOM from 'react-dom';
import { createHistory } from 'history';
import { Router, useRouterHistory } from 'react-router';
import routes from './routes';

const browserHistory = useRouterHistory(createHistory)({
            basename: '/'
        });

ReactDOM.render((
  <Router history={browserHistory} routes={routes} />
), document.getElementById('app'));
