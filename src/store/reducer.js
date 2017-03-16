import { combineReducers } from 'redux';
import lifeReducer from './lifeReducer';

export const makeRootReducer = () => {
  return combineReducers({
    life: lifeReducer,
  });
};