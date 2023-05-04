import React from 'react'
import '../style/images.scss';
import FrontBack from '../media/Front-Back.png';

function ShirtImages() {
  return (
    <div>
        <img src={FrontBack} alt="Chrome Stars Tour Tee" className='front-back' />
    </div>
  )
}

export default ShirtImages