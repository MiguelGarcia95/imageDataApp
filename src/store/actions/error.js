import {ERROR} from './actionTypes';

export const displayError = error => {
  return {
    type: ERROR,
    payload: {
      error: error
    }
  }
}