import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CategorySwiper from './components/CategorySwiper';
import { Icon } from './components/Header';

function App() {
  return (
    <>
      <Header />
      <CategorySwiper/>
      <section className='deals-section'>    
      <div className='container'>
        <div className='deal-section'>
          <div className='deal-title-wrapper'>
            <div className='deal-title'>
              <h2>Day of the <span style={{color:'#8118d5'}}>Deal</span></h2>
              <p>Don`t wait. The time will never be just right.</p>
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
          <div className='products-section'>
           <div className='products-wrapper'>
            <div className='product-card'>
              <div className='product-inner'>
                <div className='pro-image-outer'>
                  <div className="pro-image">
                    <a className='image'><Icon name="grocery" /></a>
                    <span className='flag'><span></span></span>
                    <div className='pro-actions'></div>              
                  </div>               
                </div>
                <div className='product-info'>
                  <a href="/">
                    <h6 className='pro-stitle'>Dried Fruits</h6>
                  </a>
                  <h5 className='pro-title'>
                    <a href="/">Mixed Nuts Berries Pack</a>
                  </h5>
                  <div className='pro-rate-price'>
                    <span className='pro-rating'>
                      <span className='pro-rating'></span>
                      <span className='qty'></span>
                    </span>
                    <span className='pro-price'>
                      <span className='new-price'></span>
                      <span className='old-price'></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    
      </div>
      </section>
 
    </>
  );
}

export default App;
