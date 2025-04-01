import React from 'react';
import { Icon } from '../common/Utilities';
import { Link } from 'react-router-dom';

const ProductCard = ({product, isShopPage = false}) => {

  const imageSizeStyle = isShopPage ? {
    width: '295px',
    height: '210px',
  }: {
      width: '275px',
      height: '200px',
  };

    return (
        <>       
        <div className='product-card' >
         <div className='product-inner'>
          <div className='pro-image-outer'>
            <div className="pro-image">
              <a className='image'><img src={product.url} style={imageSizeStyle}/></a>
              <span className='flags'><span>sale</span></span>
              <div className='pro-actions'></div>              
            </div>               
          </div>
          <div className='product-info'>
            <a href="/">
              <h6 className='pro-stitle'>{product.category}</h6>
            </a>
            <h5 className='pro-title'>
              <Link to={`/ProductDetails/${product.id}`}>{product.name}</Link>
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
                  <span className='new-price'>${product.newPrice}</span>
                  <span className='old-price'>${product.oldPrice}</span>
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