import * as actionTypes from './actionTypes';

export const testFunctions = image => {
  return dispatch => {
    const imageBase64 = decodeBase64Image(image.base64);
    fetch(`https://us-central1-image-labeled-search.cloudfunctions.net/imageLabelDetection`, {
      method: 'POST',
      body: JSON.stringify({image: imageBase64, type: image.type})
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw(new Error(res.error))
      }
    })
    .then(parsed => {
      console.log(parsed);
    })
    .catch(err => console.log(err));
  }
}

const decodeBase64Image = (dataString) => {
  const matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

  if (matches.length !== 3) {
    return new Error('Invalid input string');
  }

  return matches[2];
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