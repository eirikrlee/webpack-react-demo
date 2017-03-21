import React from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route, Link } from 'react-router';

import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';


import routes from './routes';
import createStore from './redux/createStore';
import RootContainer from './containers/RootContainer';

require('@axa/web-toolkit/dist/bundles/all.css');

const initialState = window.___INITIAL_STATE__;
const store = createStore(initialState);


let render = () => {
  //const routes = require('./routes/index').default(store)
  ReactDOM.render(
    <RootContainer store={store} routes={routes} />,
     document.getElementById('root')
  );
};

render();