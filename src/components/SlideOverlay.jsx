import React, { useState } from 'react';
import './SlideOverlay.css';
import { Icon } from './Header';
import SlideCartProductList from './SlideCartProductList';

const SlideOverlay = ({ isSlideActive, setIsSlideActive }) => {
  const listItems = [];

  for (let i = 0; i < 10; i++) {
    listItems.push(<SlideCartProductList />);
  }

  return (
    <>
      <div className={`overlay ${isSlideActive ? 'active' : ''}`}></div>
      <div className={`container ${isSlideActive ? 'active' : ''}`}>
        <div className="cart-wrapper">
          <div className="cart-top">
            <div className="cart-title-wrapper">
              <div className="cart-title">My Cart</div>
              <span onClick={() => setIsSlideActive(!isSlideActive)}>
                <Icon name="close" className="cart-close"  />
              </span>
            </div>
            <div className="slide-cart-items">{listItems}</div>
          </div>
          <div className="cart-bottom">
            <div className="cart-sub-total">
              <table className="table" style={{ width: '100%' }}>
                <tbody>
                  <tr>
                    <td className="text-left">Sub Total :</td>
                    <td className="text-right">$365.00</td>
                  </tr>
                  <tr>
                    <td className="text-left">VAT (20%):</td>
                    <td className="text-right">$74.00</td>
                  </tr>
                  <tr>
                    <td className="text-left">Total :</td>
                    <td className="text-right">$438.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="cart-btn">
              <a className="btn-1" href="/">
                View Cart
              </a>
              <a className="btn-2" href="/">
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideOverlay;
