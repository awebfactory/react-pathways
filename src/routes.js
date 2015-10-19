import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home/home';
import About from './components/about/about';
import Docs from './components/docs/docs';
import IndexDoc from './components/docs/index-doc';
import CurrentDoc from './components/docs/current-doc';
import Contact from './components/contact/contact';

const routes = (
<Route path="/" component={App}>
  <IndexRoute component={Home}/>
  <Route path="about" component={About}/>
  <Route path="docs" component={Docs}>
      <IndexRoute component={IndexDoc}/>
      <Route path=":id" component={CurrentDoc}/>
  </Route>
  <Route path="contact" component={Contact}/>
</Route>
);

export default routes;
