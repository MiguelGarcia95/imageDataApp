import {ERROR} from './actionTypes';

export const error = error => {
  return {
    type: ERROR,
    payload: {
      error: error
    }
  }
}