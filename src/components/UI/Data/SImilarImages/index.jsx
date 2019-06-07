import React from 'react';

const displayMatchingImages = images => {
  return images.fullMatchingImages.map((image, index) => {
    return <img className='similar_web_images' src={image.url} />
  })
}

const displayPartialMatchingImages = images => {
  return images.partialMatchingImages.map((image, index) => {
    return <img className='similar_web_images' src={image.url} /> 
  })
}

const displayPagesWithMatchingImages = images => {
  return images.pagesWithMatchingImages.map((image, index) => {
    return <img className='similar_web_images' src={image.url} />
  })
}

const displayVisuallySimilaryImages = images => {
  return images.visuallySimilaryImages.map((image, index) => {
    return <img className='similar_web_images' src={image.url} />
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
      {displayVisuallySimilaryImages(images)}
    </section>
  )
}

export default SimilarImages