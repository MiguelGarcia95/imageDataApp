import React from 'react';

const MenuItem = ({title, onItemClick}) => {
  return (
    <section className="button" onClick={onItemClick}>
      <p>{title}</p>
    </section>
  )
};

export default MenuItem;