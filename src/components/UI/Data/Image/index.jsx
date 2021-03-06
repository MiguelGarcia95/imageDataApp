import React from 'react';
import LazyLoad from 'react-lazy-load';

function Image({image}) { 
  return (
    <LazyLoad offsetVertical={300} debounce={false} throttle={250} >
      <img className='similar_web_images' alt='similar image' src={image.url} />
    </LazyLoad>
  )
}

export default Image;