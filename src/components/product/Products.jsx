import React from 'react';
import './Products.css';
import ProductCard from './ProductCard';
import ProductSwiper from '../layout/ProductSwiper';
import products from '/public/products'

const Products = ({isSwiperNeeded, category}) => {
 
   
  const productItems = products.map((product) => (
    <ProductCard product={product} key={product.id}/>
  )).slice(0,12);

  const flexWrapClass = isSwiperNeeded ? 'flex-no-wrap' : 'flex-wrap';

    return (
     <>
     <div className='products-section'>
         <div className={`products-wrapper ${flexWrapClass}`}>
            {isSwiperNeeded ? <ProductSwiper products={products} /> : productItems}     
        </div>
    </div>
     </>
     
    );
}


export default Products;