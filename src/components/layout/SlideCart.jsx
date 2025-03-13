import React, { useState } from 'react';
import './SlideCart.css';
import { Icon } from '../common/Utilities';
import SlideCartProductList from './SlideCartProductList';

const SlideCart = ({ isSlideCartActive, setIsSlideCartActive }) => {
 
  const listItems = [];
  for (let i = 0; i < 10; i++) {
    listItems.push(<SlideCartProductList key={i}/>);
  }

  return (
    <>
      <div className={`overlay ${isSlideCartActive ? 'active' : ''}`}></div>
      <div className={`slide-container ${isSlideCartActive ? 'active' : ''}`}>
        <div className="slide-cart-wrapper">
          <div className="cart-top">
            <div className="cart-title-wrapper">
              <div className="cart-title">My Cart</div>
              <span onClick={() => setIsSlideCartActive(!isSlideCartActive)}>
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

export default SlideCart;
