import React from 'react';
import './Footer.css';
import {Icon} from '../common/Utilities';


const Footer = () => {
    return (
        <>
          <footer className='footer'>
              <div className='container'>
                <div className='footer-top pd-tb-40' style={{width: '100%'}}>
                    <div className='container' style={{flexDirection:'row',justifyContent: 'space-evenly'}}>                      
                        <div className='footer-info w25'>
                            <div className='info-title'>Category</div>
                            <div className='info-list'>
                                <ul>
                                     <li className='footer-link'><a>Dried Fruit</a></li>
                                     <li className='footer-link'><a>Cookies</a></li>
                                     <li className='footer-link'><a>Foods</a></li>
                                     <li className='footer-link'><a>Fresh Fruit</a></li>
                                     <li className='footer-link'><a>Dairy & Milk</a></li>
                                     <li className='footer-link'><a>Vegetables</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='footer-account w25'>
                        <div className='info-title'>Company</div>
                            <div className='info-list'>
                                <ul>
                                     <li className='footer-link'><a>About us</a></li>
                                     <li className='footer-link'><a>Delivery</a></li>
                                     <li className='footer-link'><a>Legal Notice</a></li>
                                     <li className='footer-link'><a>Terms & conditions</a></li>
                                     <li className='footer-link'><a>Secure Payment</a></li>
                                     <li className='footer-link'><a>Contact us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='footer-service w25'>
                        <div className='info-title'>Account</div>
                            <div className='info-list'>
                                <ul>
                                     <li className='footer-link'><a>Sign In</a></li>
                                     <li className='footer-link'><a>View Cart</a></li>
                                     <li className='footer-link'><a>Return Policy</a></li>
                                     <li className='footer-link'><a>Become a Vendor</a></li>
                                     <li className='footer-link'><a>Affiliate Program</a></li>
                                     <li className='footer-link'><a>Payments</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='footer-con w25'>
                        <div className='info-title'>Contact</div>
                            <div className='info-list'>
                                <ul>
                                     <li className='footer-link'><div className='contact-link'><Icon name="navigation" style={{color:'rgb(129, 24, 213)'}}/><p>2548 Broaddus Maple Court, Madisonville KY 4783, USA.</p></div></li>
                                     <li className='footer-link'><div className='contact-link'><Icon name="chat" style={{color:'rgb(129, 24, 213)'}}/><p>+00 9876543210</p></div></li>
                                     <li className='footer-link'><div className='contact-link'><Icon name="email" style={{color:'rgb(129, 24, 213)'}}/><p>example@email.com</p></div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
          </footer>
        </>
    )
}

export default Footer;
