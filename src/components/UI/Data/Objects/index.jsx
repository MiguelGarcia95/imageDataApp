import React from 'react';

const displasyObjects = objects => {
  if (!objects) return;
  return objects.map((object, index) => {
    setTimeout(() => {
      verticies(object.boundingPoly.normalizedVertices, object.name)
    }, 2000);
    return (
      <section key={index} className="object">
        <p>{object.name}</p>
      </section>
    )
  })
}

const verticies = (points, name) => {
  let gridBox = document.querySelector('.preview_grid');
  let width = Math.abs(points[0].x - points[1].x);
  let height = Math.abs(points[1].y - points[2].y);
  let origin = points[0];
  let grid = document.createElement('section');
  grid.title = name;
  grid.style.backgroundColor = 'transparent';
  grid.style.border = '1px solid red';
  grid.style.position = 'absolute';
  grid.style.top = `${gridBox.clientHeight*origin.y}px`;
  grid.style.left = `${gridBox.clientWidth*origin.x}px`;
  grid.style.width = `${gridBox.clientWidth*width}px`;
  grid.style.height = `${gridBox.clientHeight*height}px`;
  gridBox.appendChild(grid);
}

function Objects({objects}) {
  return (
    <section>
      {displasyObjects(objects)}
    </section>
  )
}

export default Objects