import {IMAGE_ERROR, CLEAR_IMAGE_ERROR} from '../actions/actionTypes';

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
    case CLEAR_IMAGE_ERROR:
      return {
        ...state,
        error: null
      }
    default:
      return state;
  }
}

export default reducer;
