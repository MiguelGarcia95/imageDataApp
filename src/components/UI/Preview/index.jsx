import React from 'react';
import './style.css';

const Preview = ({preview, fullscreen, toggleOnImage, toggleOffImage}) => {
  return (
    <React.Fragment>
      <section className="image_preview">
          {preview && (
            <section className="image" onClick={toggleOnImage} >
              <img src={preview} alt='User Image' />
            </section>
          )}
      </section>

      <section className={`image_fullscreen ${fullscreen ? 'open' : ''}`}>
        <section className="exit"></section>
        <section className="image_container">
          <img src={preview} alt="User Image"/>
        </section>
      </section>
    </React.Fragment>
  )
}

export default Preview;