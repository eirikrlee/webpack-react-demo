import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/App';
import createStore from './store/createStore'
import AppContainer from './containers/AppContainer';
import { Router, Route, Link } from 'react-router';

//ReactDOM.render(<App />, document.getElementById('root'));

const store = createStore;

console.log('334');

let render = () => {
  //const routes = require('./routes/index').default(store)

  ReactDOM.render(
    <AppContainer store={store} />,
     document.getElementById('root')
  );
};

render();