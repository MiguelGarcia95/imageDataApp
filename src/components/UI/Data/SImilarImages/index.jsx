import React from 'react';
import Image from '../Image';
import './style.css';

// const imageError = image => {
//   console.log(image);
// }

const displayImages = images => {
  if (!images) return;
  return images.map((image, index) => {
    return <Image key={index} image={image} />
  })
}

function SimilarImages({images}) { 
  return (
    <section className="images_container">
      {images && <p className='image-title'>Matching Images</p>}
      {displayImages(images.fullMatchingImages)}
      {images && <p className='image-title'>Partial Matching Images</p>}
      {displayImages(images.partialMatchingImages)}
      {images && <p className='image-title'>Visually Similar Images</p>}
      {displayImages(images.visuallySimilarImages)}
    </section>
  )
}

export default SimilarImages