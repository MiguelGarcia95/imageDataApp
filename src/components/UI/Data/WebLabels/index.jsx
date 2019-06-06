import React from 'react';

const displayLabels = labels => {
  // format: {
  //   locations,
  //   properties,
  //   mid,
  //   locale,
  //   description,
  //   score,
  //   confidence,
  //   topicality,
  //   boundingPoly
  // }
  if (!labels) return;
  return labels.webEntities.map((label, index) => {
    return (
      <section key={index} >
        <section className="name"><p>{label.description}</p></section>
      </section>
    )
  })
}

// fullMatchingImages,
// partialMatchingImages,
// pagesWithMatchingImageas,
// visuallySimilaryImages,
// bestGuessLabels

function WebLabels({labels}) {
  return (
    <section>
      {displayLabels(labels)}
    </section>
  )
}

export default WebLabels

