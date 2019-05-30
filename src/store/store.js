import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
// import firebase from '../firebase';
import testReducer from './reducers/test';

const rootReducer = combineReducers({
  test: testReducer,
});

const store = createStore(
  rootReducer,
  initialState
)

export default store;