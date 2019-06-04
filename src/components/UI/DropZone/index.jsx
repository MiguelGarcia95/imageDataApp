import React, {useCallback} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faPlus } from '@fortawesome/free-solid-svg-icons';
import {useDropzone} from 'react-dropzone';
import './style.css'

const Dragging = ({dragging}) => {
  if (dragging) {
    return (
      <section className="drag_box dragging">
        <section className="content">
          <p>Drop The File here!</p>
        </section>
      </section>
    )
  } else {
    return (
      <section className="drag_box">
        <section className="content">
          <p>Drag Image here, or Click to Pick Image</p>
        </section>
      </section>
    )
  }
}

const DropZone = ({onImageDrop, preview}) => {
  const onDrop = useCallback((acceptedFiles, a) => {
    onImageDrop(acceptedFiles);
  }, []);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return(
    <section {...getRootProps()} >
      <input {...getInputProps()} />      
      {/* <Dragging dragging={isDragActive} /> */}
      <section className={`dropzone ${preview ? 'close' : ''}`} >
          <section className={`drop_grid ${isDragActive ? 'dragging' : '' }`}></section>
          <section className="drop_content">
            <section className="center_image">
              <FontAwesomeIcon 
                icon={faPlus} size="2x" color='white'
                className='icon-plus' 
              />
              <FontAwesomeIcon 
                icon={faImage} size="6x" color='white'
                className='icon-image' 
              />
            </section>
            <section className="content">
              <p>Drop Image Here</p>
              <small>Or Click To Open FIle</small>
            </section>
          </section>
        </section>
    </section>
  )
}

export default DropZone