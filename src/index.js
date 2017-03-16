import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
//import App from './components/App';
import routes from './routes';
import createStore from './store/createStore'
import RootContainer from './containers/RootContainer';


//ReactDOM.render(<App />, document.getElementById('root'));

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