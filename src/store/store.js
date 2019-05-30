import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
// import firebase from '../firebase';
import testReducer from './reducers/test';

const rootReducer = combineReducers({
  test: testReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;