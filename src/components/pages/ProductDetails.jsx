import React, { useState } from 'react';
import './ProductDetails.css';
import Header from '../layout/Header';
import NavigationPath from '../layout/NavigationPath';
import Footer from '../layout/Footer';
import { Icon } from '../common/Utilities';
import ProductQtyForm from '../common/ProductQtyForm';
import { useParams } from 'react-router-dom';
import products from '/public/products';

const ProductDetails = () => {
  const { productId } = useParams();
  const [variation, setVariation] = useState('250g');

  const productData = products.filter((item) => item.id === productId);
  const product = productData[0];
  
    return (
        <>
        <Header />
        <NavigationPath />
         <section className='prod-details-section pd-tb-40'>
            <div className='container'>
                <div className='wrapper'>
                   <div className='prod-image'>
                     <img src={product.url} />
                   </div>
                   <div className='single-prod-desc'>
                     <div className='single-prod-content'>
                        <h5 className='single-title'>{product.title}</h5>
                        <div className='single-price-stock'>
                            <div className='single-price'>
                                <div className='final-price'>
                                   {`₹${Number(product.newPrice).toFixed(2)}`}
                                    <span className='price-dis'>{product.discount}</span>
                                </div>
                                <div className='mrp'>
                                  M.R.P. : 
                                  <span>{`₹${Number(product.oldPrice).toFixed(2)}`}</span>
                                </div>
                            </div>
                            <div className='single-stock'>
                                <span className='single-stock-title'>IN STOCK</span>
                            </div>
                        </div>
                        <div className='single-desc'>
                           {product.description}
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
         <Footer />
        </>
    );
}


export default ProductDetails;