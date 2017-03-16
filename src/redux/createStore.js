import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
//import { browserHistory } from 'react-router';
import makeRootReducer from './reducer';


export default (initialState = {}) => {

  const middleware = [thunk];

  const enhancers = [];

  let composeEnhancers = compose;

  const store = createStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  return store;
};