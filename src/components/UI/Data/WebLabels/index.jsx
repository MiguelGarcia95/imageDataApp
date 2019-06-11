import React from 'react';

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
const displayLabels = labels => {
  if (!labels) return;
  return labels.webEntities.map((label, index) => {
    return <section key={index} className="name" ><p>{label.description}</p></section>
  })
}

// bestGuessLabels

function WebLabels({labels}) {
  return (
    <React.Fragment>
      {labels && <p className='title'>Web Labels</p> }
      <section className='container'>
        {displayLabels(labels)}
      </section>
    </React.Fragment>
  )
}

export default WebLabels

