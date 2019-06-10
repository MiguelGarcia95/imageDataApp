import React from 'react';

const displasyObjects = objects => {
  if (!objects) return;
  return objects.map((object, index) => {
    return (
      <section onClick={() => verticies(object.boundingPoly, object.name)} key={index} className="object">
        <p>{object.name}</p>
      </section>
    )
  })
}

const verticies = (object, name) => {
  // normalizedVertices[0] = top right origin,
  // [0].x - [1].x = width 
  // [1].y - [2].y = height 
  // show this on .preview_grid 
  console.log(object.normalizedVertices);
  console.log(object);
  console.log(name)
}

// boundingPoly.narmalizedVerticies - array
// x y grid, starts at top left corner.
//display it.

function Objects({objects}) {
  return (
    <section>
      {displasyObjects(objects)}
    </section>
  )
}

export default Objects