import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './style.css';


function Error({error}) {
  return (
    <section className="error">
      <section className="close">
        <FontAwesomeIcon icon={faTimes} className='icon' color='white' size='lg' />
      </section>
      <p>{error}</p>
    </section>
  )
}

export default Error;