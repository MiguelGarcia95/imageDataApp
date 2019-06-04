import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './style.css';

const Preview = ({preview, fullscreen, toggleOnImage, toggleOffImage}) => {
  return (
    <React.Fragment>
      <section className={`image_preview ${preview ? 'opened' : ''}`}>
          {preview && (
            <section className="image" onClick={toggleOnImage} >
              <img src={preview} alt='User Image' />
            </section>
          )}
      </section>

      <section className={`image_fullscreen ${fullscreen ? 'open' : ''}`}>
        <section className="exit">
          <FontAwesomeIcon 
            onClick={toggleOffImage} fixedWidth  
            icon={faTimes} size="3x" color='white'
            className='icon' 
          />
        </section>
        <section className="image_container">
          <img src={preview} alt="User Image"/>
        </section>
      </section>
    </React.Fragment>
  )
}

export default Preview;