import * as actionTypes from '../actions/actionTypes';

const initialState = {
  imageLabels: null,
  imageWebLabels: null,
  imageObjects: null,
  imageText: null,
  imageProperties: null,
  imageSafeSearch: null
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
        imageObjects: action.payload.imageObjects.objectDetection.localizedObjectAnnotations,
      }
    case actionTypes.SET_IMAGE_TEXT:
      return {
        ...state,
        imageText: {
          textAnnotations: action.payload.imageText.textDetection.textAnnotations,
          fullTextAnnotations: action.payload.imageText.textDetection.fullTextAnnotation,
        },
      }
    case actionTypes.SET_IMAGE_PROPERTIES:
      return {
        ...state,
        imageProperties: action.payload.imageProperties.propertyDetection,
        imageProperties: {
          imagePropertiesAnnotation: action.payload.imageProperties.propertyDetection.imagePropertiesAnnotation,
          cropHintsAnnotation: action.payload.imageProperties.propertyDetection.cropHintsAnnotation,
        }
      }
    case actionTypes.SET_IMAGE_SAFE_SEARCH:
      return {
        ...state,
        imageSafeSearch: action.payload.imageSafeSearch.safeSearchDetection.safeSearchAnnotation
      }
    default:
      return state;
  }
}

export default reducer;