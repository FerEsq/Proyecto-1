import React from 'react'
import Image from 'next/image';
import { useState } from 'react';

function Product(details) {
    const [hover, setHover] = useState(false);

    const handleHover = () => {
        setHover(true);
    };

    const handleLeave = () => {
        setHover(false);
    };

  return (
    <div className='product'>
        <div className='Image-square'> 
            <Image 
                src={hover ? details.image2 : details.image1}
                onMouseOver={handleHover}
                onMouseLeave={handleLeave}
                className='img'
            />
        </div>
        <p className='product-name'> {details.name} </p>
        <p className='product-price'> {details.price} </p>
    </div>
  )
}

export default Product