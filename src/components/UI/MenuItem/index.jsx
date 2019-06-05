import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuItem = ({title, onItemClick, icon}) => {
  return (
    <section className="button" onClick={onItemClick}>
      <FontAwesomeIcon icon={icon} size='lg' color='white' className='icon' />
      <p>{title}</p>
    </section>
  )
};

export default MenuItem;