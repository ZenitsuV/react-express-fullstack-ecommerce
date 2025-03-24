import React from 'react';
import './NavigationPath.css';

const NavigationPath = () => {
    return (
        <>
          <div className='container' style={{paddingTop:'0px'}}>
            <div className='nav-wrapper'>         
                   <div className='nav-page-name'>Shop Page</div>
                   <div className='nav-page-path'>Home &gt; <span>Shop Page</span></div>              
            </div>
          </div>
        </>
    )
}


export default NavigationPath;