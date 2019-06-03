import * as actionTypes from '../actions/actionTypes';

const initialState = {
  imageLabels: [],
  imageWebLabels: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_IMAGE_LABELS:
      return {
        ...state,
        imageLabels: action.payload.imageLabels.labelDetection.labelAnnotations
      }
    case actionTypes.SET_IMAGE_WEB_LABELS:
        return {
          ...state,
          imageWebLabels: action.payload.imageWebLabels
        }
    default:
      return state;
  }
}

export default reducer;