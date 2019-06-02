import * as actionTypes from './actionTypes';

const decodeBase64Image = (dataString) => {
  const matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  if (matches.length !== 3) {
    return new Error('Invalid input string');
  }
  return matches[2];
}

export const getImageLabels = image => {
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
      dispatch(setImageLabels(parsed));
    })
    .catch(err => console.log(err));
  }
}

export const setImageLabels = labels => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_IMAGE_LABELS,
      payload: {
        imageLabels: labels
      }
    });
  }
}

export const getImageWebLabels = image => {
  return dispatch => {
    const imageBase64 = decodeBase64Image(image.base64);
    fetch(`https://us-central1-image-labeled-search.cloudfunctions.net/imageWebDetection`, {
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
      dispatch(setImageWebLabels(parsed));
    })
    .catch(err => console.log(err));
  }
}

export const setImageWebLabels = labels => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_IMAGE_WEB_LABELS,
      payload: {
        imageWebLabels: labels
      }
    });
  }
}
