import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuItem = ({title, onItemClick, icon, disabled}) => {
  if (disabled) {
    return (
      <section className="button disabled">
        <FontAwesomeIcon icon={icon} size='lg' color='white' className='icon' />
        <p>{title}</p>
      </section>
    )
  } else {
    return (
      <section className="button" onClick={onItemClick}>
        <FontAwesomeIcon icon={icon} size='lg' color='white' className='icon' />
        <p>{title}</p>
      </section>
    )
  }
};

export default MenuItem;