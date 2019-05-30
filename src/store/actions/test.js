import * as actionTypes from './actionTypes';

export const testFunctions = () => {
  return dispatch => {
    fetch(`https://us-central1-image-labeled-search.cloudfunctions.net/imageLabelDetection`, {
      method: 'POST',
      // body: JSON.stringify()
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

// https://us-central1-image-labeled-search.cloudfunctions.net/imageLabelDetection

// https://us-central1-image-labeled-search.cloudfunctions.net/imageWebDetection

// export const imageText = () => {
//   return dispatch => {
//     fetch(`https://us-central1-image-labeled-search.cloudfunctions.net/helloWorld`, {
//       method: 'POST'
//     });
//   }
// }