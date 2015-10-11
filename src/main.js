import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import About from './components/about';
import Docs from './components/docs';
import Contact from './components/contact';


ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="docs" component={Docs}/>
      <Route path="contact" component={Contact}/>
    </Route>
  </Router>
), document.querySelector('#app'));
