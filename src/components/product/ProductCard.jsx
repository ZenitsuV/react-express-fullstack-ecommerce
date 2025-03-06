import React from 'react';
import { Icon } from '../common/Utilities';

const ProductCard = () => {
    return (
        <>       
        <div className='product-card'>
         <div className='product-inner'>
          <div className='pro-image-outer'>
            <div className="pro-image">
              <a className='image'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-y3QaiD_xxhD-f2iw_-dYL1w5dPdS-QaPA&s" /></a>
              <span className='flags'><span>sale</span></span>
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
                <span className='pro-rating'>             
                  <Icon name="star" className='fill' style={{fontSize:'22px'}} />
                  <Icon name="star" className='fill' style={{fontSize:'22px'}} />
                  <Icon name="star" className='fill' style={{fontSize:'22px'}} />
                  <Icon name="star" className='fill' style={{fontSize:'22px'}} />
                  <Icon name="star" className='fill' style={{fontSize:'22px'}} />
                </span>
                <span className='qty'></span>
              </span>
              <span className='pro-price'>
                <span className='new-price'>$45.00</span>
                <span className='old-price'>$56.00</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}

export default ProductCard;