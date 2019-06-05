import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuItem = ({title, onItemClick, icon}) => {
  return (
    <section className="button" onClick={onItemClick}>
      <FontAwesomeIcon icon={icon} size='2x' color='white' className='icon' />
      <small>Icon</small>
      <p>{title}</p>
    </section>
  )
};

export default MenuItem;