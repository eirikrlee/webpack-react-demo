import LifeContainer from './containers/LifeContainer';
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppContainer from './containers/AppContainer';
import App from './components/App';

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={App} />
    <Route path="life" component={LifeContainer} />
  </Route>
);

export default routes;

