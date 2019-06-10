import React from 'react';
import LazyLoad from 'react-lazy-load';
import './style.css';

const imageError = image => {
  console.log(image);

}

const displayMatchingImages = images => {
  if (!images) return;
  return images.fullMatchingImages.map((image, index) => {
    if (index > 5) {
      return (
        <LazyLoad offsetVertical={300} debounce={false} throttle={250} key={index}>
          <img className='similar_web_images' alt='similar image' src={image.url} />
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
    <section className="images_container">
      {displayMatchingImages(images)}
      {displayPartialMatchingImages(images)}
      {displayVisuallySimilarImages(images)}
    </section>
  )
}

export default SimilarImages