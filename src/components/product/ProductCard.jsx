import React from 'react';
import { Icon } from '../common/Utilities';

const ProductCard = ({product}) => {
 // console.log(product);
    return (
        <>       
        <div className='product-card' >
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
                <span className='qty'>1kg</span>
              </span>
              <span className='pro-price'>
                <div className='price-span'>
                  <span className='new-price'>$45.00</span>
                  <span className='old-price'>$56.00</span>
                </div>
                <div className='add-cart'>
                    <a className="btn-1 add-cart" href="/">
                     Add
                   </a>
                </div>
                
              </span>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}

export default ProductCard;