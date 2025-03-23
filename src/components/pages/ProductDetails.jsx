import React, { useState } from 'react';
import './ProductDetails.css';
import { Icon } from '../common/Utilities';
import ProductQtyForm from '../common/ProductQtyForm';

const ProductDetails = () => {
  const [variation, setVariation] = useState('250g');



    return (
        <>
         <section className='prod-details-section pd-tb-40'>
            <div className='container'>
                <div className='wrapper'>
                   <div className='prod-image'>
                     <img src="https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/2_1.jpg" />
                   </div>
                   <div className='single-prod-desc'>
                     <div className='single-prod-content'>
                        <h5 className='single-title'>Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips & Snacks.</h5>
                        <div className='single-price-stock'>
                            <div className='single-price'>
                                <div className='final-price'>
                                    $664.00
                                    <span className='price-dis'>-78%</span>
                                </div>
                                <div className='mrp'>
                                  M.R.P. : 
                                  <span>$2,999.00</span>
                                </div>
                            </div>
                            <div className='single-stock'>
                                <span className='single-stock-title'>IN STOCK</span>
                            </div>
                        </div>
                        <div className='single-desc'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1990.
                        </div>
                        <div className='single-pro-variations'>
                            <div className='pro-variation-size'>
                                <span>Weight</span>
                                <div className='pro-variation-content'>
                                    <ul>
                                        <li className={`${variation === '250g' ? 'active' : ''}`} onClick={(e) => setVariation(e.target.innerText)}>250g</li>
                                        <li className={`${variation === '500g' ? 'active' : ''}`} onClick={(e) => setVariation(e.target.innerText)}>500g</li>
                                        <li className={`${variation === '1kg' ? 'active' : ''}`} onClick={(e) => setVariation(e.target.innerText)}>1kg</li>
                                        <li className={`${variation === '2kg' ? 'active' : ''}`} onClick={(e) => setVariation(e.target.innerText)}>2kg</li>
                                        <li className={`${variation === '5kg' ? 'active' : ''}`} onClick={(e) => setVariation(e.target.innerText)}>5kg</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='single-qty'>
                           <ProductQtyForm />  
                           <div className='single-add-cart'>
                             <button className='btn-1'>Add to Cart</button>
                           </div>  
                           <div className='single-wishlist'>
                              <a className="btn-group wishlist" title="Wishlist"> <Icon name="favorite" style={{ fontSize: '22px' }}/></a>
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


export default ProductDetails;