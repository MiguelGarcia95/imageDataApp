import * as actionTypes from './actionTypes';

export const uiStartLoading = () => {
  return {
    type: actionTypes.UI_START_LOADING
  }
}

export const uiEndLoading = () => {
  return {
    type: actionTypes.UI_END_LOADING
  }
}
