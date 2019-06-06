import React from 'react'
import './style.css';

function Error({error, onErrorClick}) {
  return (
    <section className="error" onClick={onErrorClick}>
      {/* <p>{error}</p> */}
      {console.log(error)}
    </section>
  )
}

export default Error;