import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';

let store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
), document.getElementById('app'));
