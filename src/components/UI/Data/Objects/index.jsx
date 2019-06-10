import React from 'react';

const displasyObjects = objects => {
  if (!objects) return;
  return objects.map((object, index) => {
    return (
      <section onClick={() => verticies(object.boundingPoly.normalizedVertices, object.name)} key={index} className="object">
        <p>{object.name}</p>
      </section>
    )
  })
}

const verticies = (points, name) => {
  // normalizedVertices[0] = top right origin,
  // [0].x - [1].x = width 
  // [1].y - [2].y = height 
  // show this on .preview_grid 
  let gridBox = document.querySelector('.preview_grid');
  let width = Math.abs(points[0].x - points[1].x);
  let height = Math.abs(points[1].y - points[2].y);
  let origin = points[0];
  console.log('width', width);
  console.log('height', height);
  console.log('origin', origin);
  // console.log(name)
  // console.log(gridBox);
  var grid = document.createElement('section');
  grid.style.backgroundColor = 'red';
  grid.style.width = '20px';
  grid.style.height = '20px';
  gridBox.appendChild(grid);
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