import React from 'react';
import './DealsSection.css'
import Products from '../../product/Products';

const DealsSection = () => {
    return (
     <section className='deals-section'>    
        <div className='container'>
          <div className='deal-section'>
            <div className='section-head-wrapper'>
              <div className='section-head-title'>
                <h2>Day of the <span style={{color:'#8118d5'}}>Deal</span></h2>
                <p>Don't wait. The time will never be just right.</p>
              </div>
              <div className='deal-timer' id="deal-timer">
                <div className='deal-timer'>
                  <div className='time-block'>
                     <div className='time'>25</div>
                     <span className='day'>days</span>
                  </div>
                  <div className='time-block'>
                     <div className='time'>22</div>
                     <span className='dots'>:</span>
                  </div>
                  <div className='time-block'>
                     <div className='time'>27</div>
                     <span className='dots'>:</span>
                  </div>
                  <div className='time-block'>
                     <div className='time'>44</div>
                  </div>
                </div>
              </div>
            </div>
            <Products isSwiperNeeded={true} />       
          </div>
      
        </div>
        </section>
    );
}

export default DealsSection;