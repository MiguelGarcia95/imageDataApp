import React from 'react';
import Image from '../Image';
import './style.css';

// const imageError = image => {
//   console.log(image);
// }

const displayMatchingImages = images => {
  if (!images) return;
  return images.fullMatchingImages.map((image, index) => {
    return <Image key={index} image={image} />
  })
}

const displayPartialMatchingImages = images => {
  if (!images) return;
  return images.partialMatchingImages.map((image, index) => {
    return <Image key={index} image={image} />
  })
}

const displayVisuallySimilarImages = images => {
  if (!images) return;
  return images.visuallySimilarImages.map((image, index) => {
    return <Image key={index} image={image} />
  })
}

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