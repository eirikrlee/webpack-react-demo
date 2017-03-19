import React from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route, Link } from 'react-router';
import routes from './routes';
import createStore from './redux/createStore';
import RootContainer from './containers/RootContainer';

import axatoolkit from '@axa/web-toolkit/dist/bundles/all.css'
//https://alejandronapoles.com/2016/05/10/react-and-css-modules/

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