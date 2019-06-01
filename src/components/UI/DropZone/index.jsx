import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import './style.css'

const Dragging = ({dragging}) => {
  if (dragging) {
    return (
      <section className="drag_box dragging">
        <p>Drop The File here!</p>
      </section>
    )
  } else {
    return (
      <section className="drag_box">
        <p>Drag 'n' drop some files here, or click to select files!</p>
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
    <section {...getRootProps()}>
      <input {...getInputProps()} />
      
      <Dragging dragging={isDragActive} />
    </section>
  )
}

export default DropZone