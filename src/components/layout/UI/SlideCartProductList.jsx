import React, { useState } from 'react';
import './SlideCartProductList.css';
import ProductQtyForm from '../../common/ProductQtyForm';

const SlideCartProductList = () => {
  return (
    <>
      <ul>
        <li>
          <a className="cart-item-img">
            <img src="vite.svg" alt="product" />
          </a>
          <div className="cart-item-content">
            <a className="cart-item-title" href="/">
              Mixed Nuts Berries Pack Mixed Nuts Berries Pack
            </a>
            <span className="cart-item-price">
              <span>$45.00</span>
            </span>
             <ProductQtyForm />  
            <a class="remove">×</a>
          </div>
        </li>
      </ul>
    </>
  );
};

export default SlideCartProductList;
