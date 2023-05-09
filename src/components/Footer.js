import React from 'react'
import '../style/footer.scss';

import Amex from '../media/Amex.svg';
import Apple from '../media/Apple.svg';
import Diners from '../media/Diners.svg';
import Discover from '../media/Discover.svg';
import Meta from '../media/Meta.svg';
import Google from '../media/Google.svg';
import Mastercard from '../media/Mastercard.svg';
import PayPal from '../media/PayPal.svg';
import Shop from '../media/Shop.svg';
import Venmo from '../media/Venmo.svg';
import Visa from '../media/Visa.svg';

import Manhead from '../media/Manhead.svg';

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
            <ul>
                <li> <img src={Amex} className='amex'/> </li>
                <li> <img src={Apple} className='apple'/> </li>
                <li> <img src={Diners} className='diners'/> </li>
                <li> <img src={Discover} className='discover'/> </li>
                <li> <img src={Meta} className='meta'/> </li>
                <li> <img src={Google} className='google'/> </li>
                <li> <img src={Mastercard} className='mastercard'/> </li>
                <li> <img src={PayPal} className='paypal'/> </li>
                <li> <img src={Shop} className='shop'/> </li>
                <li> <img src={Venmo} className='venmo'/> </li>
                <li> <img src={Visa} className='visa'/> </li>
            </ul>
        </div>

        <div className='footer-info'> 
            <p> © 2023 </p> 
            <p className='link'> Marina Us </p>
            <p> Powered by </p>
            <p className='link'> MAHNEAD. </p>
        </div>

        <div className='footer-info'> 
            <p> 953 Main Street, Nashville, TN 37206 | </p> 
            <p className='link'> support@manheadmerch.com </p>
        </div>
        <br/>
        <img src={Manhead} className='m-logo'/>
        <br/> <br/> <br/>
    </div>
  )
}

export default Footer