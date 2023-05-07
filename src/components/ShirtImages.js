import React from 'react'
import '../style/images.scss';
import Lens from '../media/Lens.svg';
import FrontBack from '../media/Front-Back.png';
import Front from '../media/Front.png';
import Back from '../media/Back.png';

function ShirtImages() {

  return (
    <div>
        <div className='image1'>
          <img src={FrontBack} className='front-back' alt="Shirt front and back" />
          <img src={Lens} className='lens' alt="Lens" />
        </div>

        <div className='bottom-images'> 
          <div className='image2'> 
            <img src={Front} className='front' alt="Shirt front" />
            <img src={Lens} className='lens' alt="Lens" />
          </div>

          <div className='image3'>
            <img src={Back} className='back' alt="Shirt back" />
            <img src={Lens} className='lens' alt="Lens" />
          </div>  
        </div>     
        
    </div>
  )
}

export default ShirtImages