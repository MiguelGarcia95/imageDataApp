import React from 'react'
import './style.css';

function Error({error}) {
  return (
    <section className="error">
      <p>{error}</p>
    </section>
  )
}

export default Error;