import React from 'react';

const displayText = text => {
  if (!text) return;
  return text.textAnnotations.map((result, index) => {
    return (
      <section className="text" key={index}>
        <p>{result.description}</p>
      </section>
    )
  })
}

// const displayPageBlocks = blocks => {
//   return blocks.map(block => {
//     <section className="block">
//       <p></p>
//     </section>
//   })
// }

// const displayTextAnnotations = text => {
//   if (!text) return;
//   return text.fullTextAnnotations.pages.map((result, index) => {
//     // result.width, result.height
//     <section key={index} className="text">

//     </section>
//   })
// }

// text.textAnnotations -array boundingPoly

function Text({text}) {
  return (
    <section>
      {displayText(text)}
    </section>
  )
}

export default Text