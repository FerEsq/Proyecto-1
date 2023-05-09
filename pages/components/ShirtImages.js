import React from 'react'
import Image from 'next/image';

import Lens from '../media/Lens.svg';
import FrontBack from '../media/Front-Back.png';
import Front from '../media/Front.png';
import Back from '../media/Back.png';

function ShirtImages() {

  return (
    <div>
        <div className='image1'>
          <Image src={FrontBack} className='front-back' alt="Shirt front and back" />
          <Image src={Lens} className='lens' alt="Lens" />
        </div>

        <div className='bottom-images'> 
          <div className='image2'> 
            <Image src={Front} className='front' alt="Shirt front" />
            <Image src={Lens} className='lens' alt="Lens" />
          </div>

          <div className='image3'>
            <Image src={Back} className='back' alt="Shirt back" />
            <Image src={Lens} className='lens' alt="Lens" />
          </div>  
        </div>     
        
    </div>
  )
}

export default ShirtImages