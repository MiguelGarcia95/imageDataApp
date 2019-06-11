import React from 'react';
import LazyLoad from 'react-lazy-load';
import Image from '../Image';
import './style.css';

const imageError = image => {
  console.log(image);

}

const displayMatchingImages = images => {
  if (!images) return;
  return images.fullMatchingImages.map((image, index) => {
    return (
      // <LazyLoad offsetVertical={300} debounce={false} throttle={250} key={index}>
      //   <img className='similar_web_images' alt='similar image' src={image.url} />
      // </LazyLoad>
      <Image index={index} image={image} />
    )
  })
}

const displayPartialMatchingImages = images => {
  if (!images) return;
  return images.partialMatchingImages.map((image, index) => {
    return (
      // <LazyLoad offsetVertical={300} debounce={false} throttle={250} key={index}>
      //    <img className='similar_web_images' alt='matching image' src={image.url} />
      // </LazyLoad>
      <Image index={index} image={image} />

    ) 
  })
}

const displayVisuallySimilarImages = images => {
  if (!images) return;
  return images.visuallySimilarImages.map((image, index) => {
    return (
      // <LazyLoad offsetVertical={300} debounce={false} throttle={250} key={index} >
      //    <img className='similar_web_images' alt='visually similar image' src={image.url} />
      // </LazyLoad>
      <Image index={index} image={image} />
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
      {images && <p className='image-title'>Matching Images</p>}
      {displayMatchingImages(images)}
      {images && <p className='image-title'>Partial Matching Images</p>}
      {displayPartialMatchingImages(images)}
      {images && <p className='image-title'>Visually Similar Images</p>}
      {displayVisuallySimilarImages(images)}
    </section>
  )
}

export default SimilarImages