import React from 'react';

const displayProperties = properties => {
  if (!properties) return;
  return properties.imagePropertiesAnnotation.dominantColors.colors.map((properties, index) => {
    return (
      <section key={index} className="property_item">
        <p>{properties.color.red}</p>
        <p>{properties.color.green}</p>
        <p>{properties.color.blue}</p>
      </section>
    )
  })
}

// properties.cropHintsAnnotation.cropHints

function Properties({properties}) {
  return (
    <section>
      {displayProperties(properties)}
    </section>
  )
}

export default Properties