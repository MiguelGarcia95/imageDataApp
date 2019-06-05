import {ERROR} from '../actions/actionTypes';

const initialState = {
  error: null,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ERROR: 
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state;
  }
}

export default reducer;
