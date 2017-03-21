import LifeContainer from './containers/LifeContainer';
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppContainer from './containers/AppContainer';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={Home} />
    <Route path="life" component={LifeContainer} />
    <Route path='*' component={NotFound} />
  </Route>
);

export default routes;

