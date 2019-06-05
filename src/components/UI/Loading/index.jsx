import React from 'react'
import { ClipLoader } from 'react-spinners';
import './style.css';

function Loading() {
  return (
    <section className='spinner'>
      <ClipLoader
        sizeUnit={"px"}
        size={200}
        color={'#fff'}
        css={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          margin: 'auto',
          position: 'absolute',
        }}
      />
      <p className='loading_text'>
        Loading 
        <span className='dot one'>.</span>
        <span className='dot two'>.</span>
        <span className='dot three'>.</span>
      </p>
    </section>
  )
}

export default Loading;