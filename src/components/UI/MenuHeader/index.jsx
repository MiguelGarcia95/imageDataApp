import React from 'react';
import DropZone from '../../UI/DropZone';
import './style.css';


const MenuHeader = ({dropZoneOpened, onImageDrop, preview}) => {
  return (
    <section className={`drop_zone_container ${dropZoneOpened ? 'filled' : '' }`}>
      <DropZone onImageDrop={onImageDrop} isEmpty={dropZoneOpened ? false : true} />
      {preview && (
        <section className="button_container">
          <section className="buttons">
            <section className="button">
              <p>Web Detection</p>
            </section>
            <section className="button">
              <p>Label Detection</p>
            </section>
            <section className="button">
              <p>Label Detection</p>
            </section>
            <section className="button">
              <p>Label Detection</p>
            </section>
            <section className="button">
              <p>Label Detection</p>
            </section>
            <section className="button">
              <p>Label Detection</p>
            </section>
          </section>
        </section>
      ) }
    </section>
  )
}

export default MenuHeader;