import * as actionTypes from './actionTypes';

export const testFunctions = image => {
  return dispatch => {
    fetch(`https://us-central1-image-labeled-search.cloudfunctions.net/imageLabelDetection`, {
      method: 'POST',
      body: JSON.stringify({image: decodeBase64Image(image.base64)})
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

const decodeBase64Image = (dataString) => {
  const matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  // let response = {};

  if (matches.length !== 3) {
    return new Error('Invalid input string');
  }


  // response.type = matches[1];
  // response.data = new Buffer(matches[2], 'base64');

  return new Buffer(matches[2], 'base64');
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