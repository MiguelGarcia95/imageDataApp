import {IMAGE_ERROR} from './actionTypes';

export const displayError = error => {
  return {
    type: IMAGE_ERROR,
    payload: {
      error: error
    }
  }
}