import React from 'react';

const Preview = ({preview}) => {
  return (
    <section className="image_preview">
      {preview && <img src={preview} />}
    </section>
  )
}

export default Preview;