import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/content/home';
import About from './components/content/about';
import Docs from './components/content/docs/docs';
import IndexDoc from './components/content/docs/index-doc';
import CurrentDoc from './components/content/docs/current-doc';
import Contact from './components/content/contact';

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