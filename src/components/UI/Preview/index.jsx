import React from 'react';
import './style.css';

const Preview = ({preview, fullscreen}) => {
  return (
    <React.Fragment>
      <section className="image_preview">
        <section className="image">
          {preview && <img src={preview} />}
        </section>
      </section>

      <section className={`image_fullscreen ${fullscreen ? 'open' : ''}`}>
        <section className="exit"></section>
        <section className="image_container">
          <img src={preview} alt=""/>
        </section>
      </section>
    </React.Fragment>
  )
}

export default Preview;