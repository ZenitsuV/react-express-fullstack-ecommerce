import React from 'react';
import './Products.css';
import ProductCard from './ProductCard';
import ProductSwiper from '../layout/ProductSwiper';
import products from '/public/products'

const Products = ({isSwiperNeeded, category, count = 12}) => {
 
  category ??= "All";
  console.log(category);

  const filteredProducts =  category === 'All' ? products : products.filter((pro) => category.includes(pro.category));

  let productItems;
  if(filteredProducts.length > 0) {
    productItems = filteredProducts.map((product) => (
      <ProductCard product={product} key={product.id}/>
    )).slice(0, count);  
  }
  else {
    productItems = <div className='nodata'><div>Products is not found.</div></div>;
  }


  console.log(productItems);

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