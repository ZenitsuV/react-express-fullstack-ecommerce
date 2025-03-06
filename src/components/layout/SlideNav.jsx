import React from 'react'
import './SlideNav.css';
import { Icon } from '../common/Utilities';

const SlideNav = ({isSlideMenuActive, setIsSlideMenuActive, slidePosition}) => {

  const style=slidePosition === "left" ? {left:'0',right:'auto', transform: 'translateX(-100%)'} : ''

  return (
  <> 
    <div className={`overlay ${isSlideMenuActive ? 'active' : ''}`}></div>
    <div className={`slide-nav ${isSlideMenuActive ? 'active' : ''}`}>  
      <div className='title-wrapper'>
      <div className="menu-title">My Menu</div>
            <span onClick={() => setIsSlideMenuActive(!isSlideMenuActive)}>
              <Icon name="close" className="cart-close"  />
            </span>   
      </div>
      <div className='menu-content'>
       <nav>
        <ul>
            <li className='menu-item'><a>Home</a></li>
            <li className='menu-item'><a>Categories</a></li>
            <li className='menu-item'><a>Products</a></li>
            <li className='menu-item'><a>Contact Us</a></li>
         </ul>
        </nav>
        
      </div>
           
    </div>
  </>
  )
}


export default SlideNav;