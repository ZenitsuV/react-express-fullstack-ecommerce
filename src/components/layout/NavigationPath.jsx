import React from 'react';
import './NavigationPath.css';
import { Link, useLocation } from 'react-router-dom';
import ProductDetails from '../pages/ProductDetails';

const NavigationPath = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const currentPageName = currentPath.split('/')[1];

   const pageObj = {
      ProductDetails : "Product Details",
      Home : "Home",
      Shop : "Shop Page",
      Cart : "Cart",
      register : "Register Page",
   }
  
 

    return (
        <>
          <div className='container' style={{paddingTop:'0px'}}>
            <div className='nav-wrapper'>         
                   <div className='nav-page-name'>{pageObj[currentPageName]}</div>
                   <div className='nav-page-path'><Link to="/">Home</Link> &gt; <span>{pageObj[currentPageName] ? pageObj[currentPageName] : "Home"}</span></div>              
            </div>
          </div>
        </>
    )
}


export default NavigationPath;