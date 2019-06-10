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
        <section className="name" onClick={() => console.log(label.boundingPoly)} ><p>{label.description}</p></section>
      </section>
    )
  })
}

// bestGuessLabels

function WebLabels({labels}) {
  return (
    <section>
      {displayLabels(labels)}
    </section>
  )
}

export default WebLabels

