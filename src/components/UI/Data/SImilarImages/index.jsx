import React from 'react';
import LazyLoad from 'react-lazy-load';

const displayMatchingImages = images => {
  if (!images) return;
  return images.fullMatchingImages.map((image, index) => {
    if (index > 5) {
      return (
        <LazyLoad offsetVertical={300} debounce={false} throttle={250} key={index} >
          <img src='http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg' />
        </LazyLoad>
      )
    } else {
      return (
        <LazyLoad debounce={false} throttle={250} key={index}>
           <img className='similar_web_images' alt='similar image' src={image.url} />
        </LazyLoad>
      )
    }
  })
}

const displayPartialMatchingImages = images => {
  if (!images) return;
  return images.partialMatchingImages.map((image, index) => {
    return (
      <LazyLoad offsetVertical={300} debounce={false} throttle={250} key={index} >
         <img className='similar_web_images' alt='matching image' src={image.url} />
      </LazyLoad>
    ) 
  })
}

const displayPagesWithMatchingImages = images => {
  if (!images) return;
  return images.pagesWithMatchingImages.map((image, index) => {
    return (
      <LazyLoad offsetVertical={300} debounce={false} throttle={250} key={index} >
         <img className='similar_web_images' alt='matching page image' src={image.url} />
      </LazyLoad>
    )
  })
}

const displayVisuallySimilarImages = images => {
  if (!images) return;
  return images.visuallySimilarImages.map((image, index) => {
    return (
      <LazyLoad offsetVertical={300} debounce={false} throttle={250} key={index} >
         <img className='similar_web_images' alt='visually similar image' src={image.url} />
      </LazyLoad>
    )
  })
}

// fullMatchingImages,
// partialMatchingImages,
// pagesWithMatchingImages,
// visuallySimilaryImages,
// bestGuessLabels

function SimilarImages({images}) { 
  return (
    <section>
      {displayMatchingImages(images)}
      {displayPagesWithMatchingImages(images)}
      {displayPartialMatchingImages(images)}
      {displayVisuallySimilarImages(images)}
    </section>
  )
}

export default SimilarImages