import React from 'react';

const displasyObjects = objects => {
  if (!objects) return;
  return objects.map((object, index) => {
    return (
      <section onClick={() => console.log(object.boundingPoly)} key={index} className="object">
        <p>{object.name}</p>
      </section>
    )
  })
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