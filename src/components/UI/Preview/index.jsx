import React from 'react';
import './style.css';

const Preview = ({preview}) => {
  return (
    <section className="image_preview">
      <section className="image">
        {preview && <img src={preview} />}
      </section>
    </section>
  )
}

export default Preview;