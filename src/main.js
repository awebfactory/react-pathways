import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import App from './components/app';
import Home from './components/home/home';
import About from './components/about/about';
import Docs from './components/docs/docs';
import Contact from './components/contact/contact';

let history = createBrowserHistory();

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="docs" component={Docs}/>
      <Route path="contact" component={Contact}/>
    </Route>
  </Router>
), document.querySelector('#app'));
