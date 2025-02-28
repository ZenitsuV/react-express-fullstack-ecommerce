import React, { useState } from 'react';
import './SlideCartProductList.css';

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
            <div className="qty-plus-minus">
              <div
                style={{
                  cursor: 'pointer',
                  backgroundColor: 'rgb(41, 149, 182)',
                  padding: '10px',
                  textAlign: 'center',
                }}
              >
                -
              </div>
              <input type="text" value="1" className="qty-input" readonly />
              <div
                style={{
                  cursor: 'pointer',
                  backgroundColor: 'rgb(41, 149, 182)',
                  padding: '10px',
                  textAlign: 'center',
                }}
              >
                +
              </div>
            </div>
            <a class="remove">×</a>
          </div>
        </li>
      </ul>
    </>
  );
};

export default SlideCartProductList;
