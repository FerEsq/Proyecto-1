import React from 'react'
import '../style/footer.scss';

function Footer() {
  return (
    <div>
        <h2> Quick links </h2>
        <div className='footer-options'> 
            <ul>
                <li> <p className='link'> Search </p> </li>
                <li> <p className='link'> Contact Us </p> </li>
                <li> <p className='link'> Privacy Policy </p> </li>
                <li> <p className='link'> Returns & Exchanges </p> </li>
                <li> <p className='link'> Shipping FAQ </p> </li>
                <li> <p className='link'> Site Use Terms & Conditions </p> </li>
            </ul>
        </div>
        <br/> 
        <div className='payment-options'>

        </div>
    </div>
  )
}

export default Footer