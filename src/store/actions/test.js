import * as actionTypes from './actionTypes';

export const testFunctions = () => {
  return dispatch => {
    fetch(` https://us-central1-image-labeled-search.cloudfunctions.net/sendImageForVision`, {
      method: 'POST'
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw(new Error())
      }
    })
    .then(parsed => {
      console.log(parsed);
    })
    .catch(err => console.log(err));
  }
}

// export const imageText = () => {
//   return dispatch => {
//     fetch(`https://us-central1-image-labeled-search.cloudfunctions.net/helloWorld`, {
//       method: 'POST'
//     });
//   }
// }