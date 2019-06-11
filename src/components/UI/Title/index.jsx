import React from 'react'

function Title({title, preview}) {
  return (
    <section className={`title ${preview ? 'closed' : ''}`}>
      <h1>{title}</h1> 
    </section>
  )
}

export default Title;