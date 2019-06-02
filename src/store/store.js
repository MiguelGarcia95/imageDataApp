import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
// import firebase from '../firebase';
import thunk from 'redux-thunk';
import imageReducer from './reducers/image';

const rootReducer = combineReducers({
  image: imageReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store;