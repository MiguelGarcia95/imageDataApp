import {IMAGE_ERROR} from '../actions/actionTypes';

const initialState = {
  error: null,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case IMAGE_ERROR: 
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state;
  }
}

export default reducer;
