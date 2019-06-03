import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
// import firebase from '../firebase';
import thunk from 'redux-thunk';
import imageReducer from './reducers/image';
import uiReducer from './reducers/ui';

const rootReducer = combineReducers({
  image: imageReducer,
  ui: uiReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store;