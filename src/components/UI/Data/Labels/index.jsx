import React from 'react';

const displayLabels = labels => {
  if (!labels) return;
  return labels.map((label, index) => {
    return <section key={index} className="name" ><p>{label.description}</p></section>;
  })
}

function Labels({labels}) {
  return (
    <React.Fragment>
      {labels && <p className='title'>Labels</p> }
      <section className="container">
        {displayLabels(labels)}
      </section>
    </React.Fragment>
  )
}

export default Labels