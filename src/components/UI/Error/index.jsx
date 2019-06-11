import React from 'react'
import './style.css';

function Error({error, onErrorClick}) {
  return (
    <section className="error" onClick={onErrorClick}>
      <p>{error}</p>
    </section>
  )
}

export default Error;