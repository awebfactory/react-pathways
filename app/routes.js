import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/content/home';
import About from './components/content/about';
import Path from './containers/path';
import Steps from './components/content/steps/steps';
import IndexStep from './components/content/steps/index-step';
import CurrentStep from './components/content/steps/current-step';
import Contact from './components/content/contact';

const routes = (
<Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
    <Route path="steps" component={Path}>
        <IndexRoute component={IndexStep}/>
        <Route path=":id" component={CurrentStep}/>  
    </Route>
    <Route path="contact" component={Contact}/>
</Route>
);

export default routes;