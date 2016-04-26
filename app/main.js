import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import paths from './reducers';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

let store = createStore(paths);

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
), document.getElementById('app'));
