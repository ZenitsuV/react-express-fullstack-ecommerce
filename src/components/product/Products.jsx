import React from 'react';
import './Products.css';
import ProductCard from './ProductCard';
import Swiper from '../common/Swiper';

const Products = () => {

const listItems = [];
for (let i = 0; i < 6; i++) {
    listItems.push(<ProductCard />);
}

    return (
     <>
     <div className='products-section'>
         <div className='products-wrapper'>
         <Swiper/>
        </div>
    </div>
     </>
     
    );
}


export default Products;