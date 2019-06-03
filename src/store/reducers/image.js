import * as actionTypes from '../actions/actionTypes';

const initialState = {
  imageLabels: [],
  imageWebLabels: [],
  imageObjects: [],
  imageText: [],
  imageProperties: [],
  imageSafeSearch: []
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
        imageWebLabels: action.payload.imageWebLabels.webDetection.webDetection
      }
    case actionTypes.SET_IMAGE_OBJECTS:
      return {
        ...state,
        imageObjects: action.payload.imageObjects
      }
    case actionTypes.SET_IMAGE_TEXT:
      return {
        ...state,
        imageText: action.payload.imageText
      }
    case actionTypes.SET_IMAGE_PROPERTIES:
      return {
        ...state,
        imageProperties: action.payload.imageProperties
      }
    case actionTypes.SET_IMAGE_SAFE_SEARCH:
      return {
        ...state,
        imageSafeSearch: action.payload.imageSafeSearch
      }
    default:
      return state;
  }
}

export default reducer;