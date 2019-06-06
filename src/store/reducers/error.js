import {IMAGE_ERROR, CLEAR_IMAGE_ERROR} from '../actions/actionTypes';

const initialState = {
  error: null,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case IMAGE_ERROR: 
    console.log(action.payload.error)
    console.log(action.payload.error.message)
      return {
        ...state,
        error: action.payload.error.message
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
