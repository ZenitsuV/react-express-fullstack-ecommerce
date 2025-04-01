import React from 'react';
import './Products.css';
import ProductCard from './ProductCard';
import ProductSwiper from '../layout/ProductSwiper';
import products from '/public/products';
import {handleSorting} from '../common/Utilities';

const Products = ({isSwiperNeeded, category, count = 12, filterBy = "", isShopPage}) => {
  category ??= "All";
  const filteredProducts =  category === 'All' ? products : products.filter((pro) => category.includes(pro.category));

 if(filterBy) {
   if(filterBy == '1') {
     handleSorting(filteredProducts, "asc", "name");  
   }
   else if(filterBy == '2') {
     handleSorting(filteredProducts, "desc", "name");
   }
   else if (filterBy == '3') {
     handleSorting(filteredProducts, "asc", "newPrice");
   } else if (filterBy == '4') {
     handleSorting(filteredProducts, "desc", "newPrice");
   }
}

  
  let productItems;
  if(filteredProducts.length > 0) {
    productItems = filteredProducts.map((product) => (
      <ProductCard product={product} key={product.id} isShopPage={isShopPage}/>
    )).slice(0, count);  
  }
  else {
    productItems = <div className='nodata'><div>Products is not found.</div></div>;
  }

  const flexWrapClass = isSwiperNeeded ? 'flex-no-wrap' : 'flex-wrap';

    return (
     <>
     <div className='products-section'>
         <div className={`products-wrapper ${flexWrapClass}`}>
            {isSwiperNeeded ? <ProductSwiper products={products} isShopPage={isShopPage}/> : productItems}     
        </div>
    </div>
     </>
     
    );
}

export default Products;