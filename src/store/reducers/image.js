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
        // imageWebLabels: action.payload.imageWebLabels.webDetection.webDetection
        imageWebLabels: action.payload.imageWebLabels.webDetection
      }
    case actionTypes.SET_IMAGE_OBJECTS:
      return {
        ...state,
        imageObjects: action.payload.imageObjects.objectDetection,
        imageObjects: action.payload.imageObjects.objectDetection,
      }
    case actionTypes.SET_IMAGE_TEXT:
      return {
        ...state,
        imageText: action.payload.imageText.textDetection,
        // imageText: action.payload.imageText.textDetection.localizedObjectAnnotations,
      }
    case actionTypes.SET_IMAGE_PROPERTIES:
      return {
        ...state,
        imageProperties: action.payload.imageProperties.propertyDetection,
        // imageProperties: action.payload.imageProperties.propertyDetection.imagePropertiesAnnotation
      }
    case actionTypes.SET_IMAGE_SAFE_SEARCH:
      return {
        ...state,
        imageSafeSearch: action.payload.imageSafeSearch.safeSearchDetection
        // imageSafeSearch: action.payload.imageSafeSearch.safeSearchDetection.safeSearchAnnotation
      }
    default:
      return state;
  }
}

export default reducer;