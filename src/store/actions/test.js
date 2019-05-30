import * as actionTypes from './actionTypes';

export const testFunctions = () => {
  return dispatch => {
    fetch(` https://us-central1-image-labeled-search.cloudfunctions.net/sendImageForVision`, {
      method: 'POST'
    });
  }
}

// export const imageText = () => {
//   return dispatch => {
//     fetch(`https://us-central1-image-labeled-search.cloudfunctions.net/helloWorld`, {
//       method: 'POST'
//     });
//   }
// }