import React, {useCallback} from 'react';
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

const DropZone = ({onImageDrop, isEmpty}) => {
  const onDrop = useCallback(acceptedFiles => {
    onImageDrop(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})



  return(
    <section {...getRootProps()} id='drag_box'>
      <input {...getInputProps()} />
      
      <Dragging dragging={isDragActive} />
    </section>
  )
}

export default DropZone