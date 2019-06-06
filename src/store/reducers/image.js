import * as actionTypes from '../actions/actionTypes';

const initialState = {
  imageLabels: null,
  imageLabelsSuccess: false,
  imageWebLabels: null,
  imageWebLabelsSuccess: false,
  imageObjects: null,
  imageObjectsSuccess: false,
  imageText: null,
  imageTextSuccess: false,
  imageProperties: null,
  imagePropertiesSuccess: false,
  imageSafeSearch: null,
  imageSafeSearchSuccess: false
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.RESET_IMAGE:
      return {
        ...state,
        imageLabels: null,
        imageLabelsSuccess: false,
        imageWebLabels: null,
        imageWebLabelsSuccess: false,
        imageObjects: null,
        imageObjectsSuccess: false,
        imageText: null,
        imageTextSuccess: false,
        imageProperties: null,
        imagePropertiesSuccess: false,
        imageSafeSearch: null,
        imageSafeSearchSuccess: false
      }
    case actionTypes.SET_IMAGE_LABELS:
      return {
        ...state,
        imageLabels: action.payload.imageLabels.labelDetection.labelAnnotations,
        imageLabelsSuccess: true,
      }
    case actionTypes.SET_IMAGE_WEB_LABELS:
      return {
        ...state,
        imageWebLabels: action.payload.imageWebLabels.webDetection.webDetection,
        imageWebLabelsSuccess: true,
      }
    case actionTypes.SET_IMAGE_OBJECTS:
      return {
        ...state,
        imageObjects: action.payload.imageObjects.objectDetection.localizedObjectAnnotations,
        imageObjectsSuccess: true,
      }
    case actionTypes.SET_IMAGE_TEXT:
      return {
        ...state,
        imageText: {
          textAnnotations: action.payload.imageText.textDetection.textAnnotations,
          fullTextAnnotations: action.payload.imageText.textDetection.fullTextAnnotation,
        },
        imageTextSuccess: true,
      }
    case actionTypes.SET_IMAGE_PROPERTIES:
      return {
        ...state,
        imageProperties: {
          imagePropertiesAnnotation: action.payload.imageProperties.propertyDetection.imagePropertiesAnnotation,
          cropHintsAnnotation: action.payload.imageProperties.propertyDetection.cropHintsAnnotation,
        },
        imagePropertiesSuccess: true,
      }
    case actionTypes.SET_IMAGE_SAFE_SEARCH:
      return {
        ...state,
        imageSafeSearch: action.payload.imageSafeSearch.safeSearchDetection.safeSearchAnnotation,
        imageSafeSearchSuccess: true,
      }
    default:
      return state;
  }
}

export default reducer;