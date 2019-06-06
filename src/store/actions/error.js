import {IMAGE_ERROR, CLEAR_IMAGE_ERROR} from './actionTypes';

export const displayError = error => {
  console.log(error)
  return {
    type: IMAGE_ERROR,
    payload: {
      error: error
    }
  }
}

export const clearError = () => {
  return {
    type: CLEAR_IMAGE_ERROR
  }
}