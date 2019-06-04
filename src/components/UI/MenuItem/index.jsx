import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const MenuItem = ({title, onItemClick}) => {
  return (
    <section className="button" onClick={onItemClick}>
      <FontAwesomeIcon icon={faTimes} size='2x' color='white' className='icon' />
      <small>Icon</small>
      <p>{title}</p>
    </section>
  )
};

export default MenuItem;