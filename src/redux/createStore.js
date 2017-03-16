import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
//import { browserHistory } from 'react-router';
import makeRootReducer from './reducer';


export default (initialState = {}) => {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middleware = [thunk];
  const enhancers = [];

  const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
    ...enhancers
  );

  const store = createStore(
    makeRootReducer(),
    initialState,
    enhancer
  );

  return store;
};