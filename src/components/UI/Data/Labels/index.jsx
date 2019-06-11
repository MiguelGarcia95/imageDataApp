import React from 'react';

const displayLabels = labels => {
  if (!labels) return;
  return labels.map((label, index) => {
    return (
      <section key={index} >
        <section className="name" ><p>{label.description}</p></section>
      </section>
    )
  })
}

function Labels({labels}) {
  return (
    <React.Fragment>
      {labels && <p className='title'>Labels</p> }
      {displayLabels(labels)}
    </React.Fragment>
  )
}

export default Labels