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
  console.log(gridBox.clientHeight);
  console.log(gridBox.clientWidth);
  let width = Math.abs(points[0].x - points[1].x);
  let height = Math.abs(points[1].y - points[2].y);
  let origin = points[0];
  // console.log('width', width);
  // console.log('height', height);
  // console.log('origin', origin); 
  // x = gridWidth * origin.x
  let xOrigin = gridBox.clientWidth*origin.x;
  let yOrigin = gridBox.clientHeight*origin.y;
  let propHeight = gridBox.clientHeight*height;
  let propWidth = gridBox.clientWidth*width;
  console.log('propHeight', propHeight);
  console.log('propWidth', propWidth);
  var grid = document.createElement('section');
  grid.style.backgroundColor = 'transparent';
  grid.style.border = '1px solid red';
  grid.style.position = 'absolute';
  grid.style.top = `${yOrigin}px`;
  grid.style.left = `${xOrigin}px`;
  grid.style.width = `${propWidth}px`;
  grid.style.height = `${propHeight}px`;
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