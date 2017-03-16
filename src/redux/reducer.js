import { combineReducers } from 'redux';
import lifeReducer from './modules/life';

const makeRootReducer = () => {
  return combineReducers({
    life: lifeReducer,
  });
};

export default makeRootReducer;