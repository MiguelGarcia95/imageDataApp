import * as actionTypes from './actionTypes';
import {uiEndLoading, uiStartLoading} from './ui';
import {displayError, clearError} from './error';

const decodeBase64Image = (dataString) => {
  const matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  if (matches.length !== 3) {
    return new Error('Invalid input string');
  } else {
    return matches[2];
  }
}

export const resetImage = () => {
  return {
    type: actionTypes.RESET_IMAGE
  }
}

export const getImageLabels = image => {
  return dispatch => {
    dispatch(clearError());
    const imageBase64 = decodeBase64Image(image.base64);
    dispatch(uiStartLoading());
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
      dispatch(uiEndLoading());
    })
    .catch(err => {
      dispatch(uiEndLoading());
      dispatch(displayError(err));
    });
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
    dispatch(clearError());
    const imageBase64 = decodeBase64Image(image.base64);
    dispatch(uiStartLoading());
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
      dispatch(uiEndLoading());
    })
    .catch(err => {
      dispatch(uiEndLoading());
      dispatch(displayError(err));
    });
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

export const getImageObjects = image => {
  return dispatch => {
    dispatch(clearError());
    const imageBase64 = decodeBase64Image(image.base64);
    dispatch(uiStartLoading());
    fetch(`https://us-central1-image-labeled-search.cloudfunctions.net/imageObjectDetection`, {
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
      dispatch(setImageObjects(parsed));
      dispatch(uiEndLoading());
    })
    .catch(err => {
      dispatch(uiEndLoading());
      dispatch(displayError(err));
    });
  }
}

export const setImageObjects = objects => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_IMAGE_OBJECTS,
      payload: {
        imageObjects: objects
      }
    });
  }
}

export const getImageText = image => {
  return dispatch => {
    dispatch(clearError());
    const imageBase64 = decodeBase64Image(image.base64);
    dispatch(uiStartLoading());
    fetch(`https://us-central1-image-labeled-search.cloudfunctions.net/imageTextDetection`, {
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
      dispatch(setImageText(parsed));
      dispatch(uiEndLoading());
    })
    .catch(err => {
      dispatch(uiEndLoading());
      dispatch(displayError(err));
      console.log(err);
    });
  }
}

export const setImageText = text => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_IMAGE_TEXT,
      payload: {
        imageText: text
      }
    });
  }
}

export const getImageProperties = image => {
  return dispatch => {
    dispatch(clearError());
    const imageBase64 = decodeBase64Image(image.base64);
    dispatch(uiStartLoading());
    fetch(`https://us-central1-image-labeled-search.cloudfunctions.net/imagePropertiesDetection`, {
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
      dispatch(setImageProperties(parsed));
      dispatch(uiEndLoading());
    })
    .catch(err => {
      dispatch(uiEndLoading());
      dispatch(displayError(err));
    });
  }
}

export const setImageProperties = properties => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_IMAGE_PROPERTIES,
      payload: {
        imageProperties: properties
      }
    });
  }
}

export const getImageSafeSearch = image => {
  return dispatch => {
    dispatch(clearError());
    const imageBase64 = decodeBase64Image(image.base64);
    dispatch(uiStartLoading());
    fetch(`https://us-central1-image-labeled-search.cloudfunctions.net/imageSafeSearchDetection`, {
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
      dispatch(setImageSafeSearch(parsed));
      dispatch(uiEndLoading());
    })
    .catch(err => {
      dispatch(uiEndLoading());
      dispatch(displayError(err));
    });
  }
}

export const setImageSafeSearch = safeSearch => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_IMAGE_SAFE_SEARCH,
      payload: {
        imageSafeSearch: safeSearch
      }
    });
  }
}
