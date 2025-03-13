import React from 'react';
import './ServiceSection.css';
import {Icon} from '../common/Utilities'

const ServiceSection = () => {
     return (
        <>
    <section className='service-section pd-tb-40'>
        <div className='container' style={{overflow: 'visible',justifyContent:'center'}}>
          <div className='section-wrapper' style={{alignItems: 'center'}}> 
             <div className='service-content'>
              <div className='service-inner' >
                 <div className='service-image'>
                  <Icon name="local_shipping" style={{fontSize: '55px', color:'#8118d5'}}/>
                 </div>
                 <div className='service-desc'>
                   <h3>Free Shipping</h3>
                   <p>Free shipping on all US order or order above $200</p>
                 </div>
              </div>
             </div>
             <div className='service-content'>
              <div className='service-inner'>
                <div className='service-image'>
                 <Icon name="volunteer_activism" style={{fontSize: '55px', color:'#8118d5'}}/>
                </div>
                 <div className='service-desc'>
                   <h3>24X7 Support</h3>
                   <p>Contact us 24 hours a day, 7 days a week</p>
                 </div>
              </div>
             </div>
             <div className='service-content'>
              <div className='service-inner'>
                <div className='service-image'>
                  <Icon name="percent" style={{fontSize: '55px', color:'#8118d5'}}/>
                </div>
                 <div className='service-desc'>
                   <h3>30 Days Return</h3>
                   <p>Simply return it within 30 days for an exchange</p>
                 </div>
              </div>
             </div>
             <div className='service-content'>
              <div className='service-inner'>
                 <div className='service-image'>
                 <Icon name="currency_rupee_circle" style={{fontSize: '55px', color:'#8118d5'}}/>
                 </div>
                 <div className='service-desc'>
                   <h3>Payment Secure</h3>
                   <p>Contact us 24 hours a day, 7 days a week</p>
                 </div>
              </div>
             </div>
          </div>
        </div>
      </section>
        </>
     )
}


export default ServiceSection;