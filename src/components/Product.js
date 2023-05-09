import React from 'react'
import { useState } from 'react';
import '../style/product.scss';

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
        <div className='img-square'> 
            <img 
                src={hover ? details.image2 : details.image1}
                onMouseOver={handleHover}
                onMouseLeave={handleLeave}
            />
        </div>
        <p className='product-name'> {details.name} </p>
        <p className='product-price'> {details.price} </p>
    </div>
  )
}

export default Product