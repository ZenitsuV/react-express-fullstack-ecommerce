import React, { useState } from 'react';
import './Header.css';
import SlideOverlay from './SlideOverlay';

export const Icon = ({ name, className, style }) => {
  return (
    <span className={`material-symbols-outlined ${className ? className : ''}`} style={style}>
      {name}
    </span>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSlideActive, setIsSlideActive] = useState(false);

  return (
    <>
      <div className="header">
        <div className="header-logo">
          <a>
            <img
              style={{ width: '100px', backgroundSize: 'contain' }}
              src="https://grabit-react-next.maraviyainfotech.com/assets/img/logo/logo.png"
            />
          </a>
        </div>
        <div className="header-search">
          <form className="header-form">
            <input
              type="text"
              className="input"
              placeholder="Search Products..."
            />
            <button type="submit" className="btn">
              <Icon name="search" className="search" />
            </button>
          </form>
        </div>
        <div className="header-icons-wrapper">
          <div className="header-buttons">
            {/* account btn */}
            <div
              className="header-account-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <a href="#" style={{ display: 'flex' }}>
                <div className="header-icon">
                  <Icon name="person" style={{ fontSize: '27px' }} />
                </div>

                <div className="header-icon-desc">
                  <span style={{ fontSize: '11px' }}>Account</span>
                  <span
                    style={{ fontSize: '13px', textTransform: 'capitalize' }}
                  >
                    Login
                  </span>
                </div>
              </a>
            </div>

            <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
              <span style={{ fontSize: '13px' }}>Register</span>
              <span style={{ fontSize: '13px' }}>Checkout</span>
              <span style={{ fontSize: '13px' }}>Login</span>
            </div>

            {/* wishlist btn */}
            <div className="header-wishlist-btn">
              <a href="#" style={{ display: 'flex' }}>
                <div className="header-icon">
                  <Icon name="favorite" />
                </div>

                <div className="header-icon-desc">
                  <span style={{ fontSize: '11px' }}>Wishlist</span>
                  <span
                    style={{ fontSize: '13px', textTransform: 'capitalize' }}
                  >
                    3-ITEMS
                  </span>
                </div>
              </a>
            </div>

            {/* cart btn */}
            <div
              className="header-cart-btn"
              onClick={() => setIsSlideActive(!isSlideActive)}
            >
              <a href="#" style={{ display: 'flex' }}>
                <div className="header-icon">
                  <Icon name="shopping_bag" />
                </div>

                <div className="header-icon-desc">
                  <span style={{ fontSize: '11px' }}>Cart</span>
                  <span
                    style={{ fontSize: '13px', textTransform: 'capitalize' }}
                  >
                    3-ITEMS
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <SlideOverlay
        isSlideActive={isSlideActive}
        setIsSlideActive={setIsSlideActive}
      />
    </>
  );
};

export default Header;
