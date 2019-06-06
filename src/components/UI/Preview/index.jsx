import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './style.css';

const Preview = ({preview, fullscreen, toggleOnImage, toggleOffImage, resetImage}) => {
  return (
    <React.Fragment>
      <section className={`image_preview ${preview ? 'opened' : ''}`}>
          {preview && (
            <React.Fragment >
              <section className="reset_image">
                <FontAwesomeIcon 
                  className='reset_icon' 
                  size='4x' color='white' 
                  icon={faRedoAlt}  
                  onClick={resetImage}
                />
              </section>
              <section className="image" onClick={toggleOnImage} >
                <img src={preview} alt='User Image' />
              </section>
            </React.Fragment>
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