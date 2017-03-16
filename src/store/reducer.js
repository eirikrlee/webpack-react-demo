import { combineReducers } from 'redux';
import lifeReducer from './lifeReducer';

const makeRootReducer = () => {
  return combineReducers({
    life: lifeReducer,
  });
};

export default makeRootReducer;