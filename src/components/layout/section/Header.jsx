import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SlideCart from '../UI/SlideCart';
import SlideNav from '../UI/SlideNav';
import { Icon } from '../../common/Utilities';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSlideCartActive, setIsSlideCartActive] = useState(false);
  const [isSlideMenuActive, setIsSlideMenuActive] = useState(false);

  return (
    <>
     <header className='header-section'>
       <div className='container' style={{flexDirection:'column',overflow: "inherit"}}>
       <div className="header">
          <div className="header-logo">
            <Link to="/">
              <img
                style={{ width: '145px', backgroundSize: 'contain' }}
                src="https://grabit-react-next.maraviyainfotech.com/assets/img/logo/logo.png"
              />
            </Link>
          </div>

        {/* header search */}
        <div className="header-search" style={{width:'33%'}}>
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
                  <Icon name="person" style={{ fontSize: '30px' }} />
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

           {/* acc-btn - submenu */}
            <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
              <span style={{ fontSize: '13px' }}><Link to="/register">Register</Link></span>
              <span style={{ fontSize: '13px' }}><Link to="/Checkout">Checkout</Link></span>
              <span style={{ fontSize: '13px' }}><Link to="/Orders">Orders</Link></span>
              <span style={{ fontSize: '13px' }}><Link to="/Login">Login</Link></span>
            </div>

            {/* wishlist btn */}
            <div className="header-wishlist-btn">
              <Link to="/Wishlist" style={{ display: 'flex' }} >
                <div className="header-icon">
                  <Icon name="favorite" style={{ fontSize: '30px' }}/>
                  <span className='header-icon-count'>3</span>
                </div>
              
                <div className="header-icon-desc">
                  <span style={{ fontSize: '11px' }}>Wishlist</span>
                  <span
                    style={{ fontSize: '13px', textTransform: 'capitalize' }}
                  >
                    3-ITEMS
                  </span>
                </div>
              </Link>
            </div>

            {/* cart btn */}
            <div
              className="header-cart-btn"
              onClick={() => setIsSlideCartActive(!isSlideCartActive)}
            >
              <a href="#" style={{ display: 'flex' }}>
                <div className="header-icon">
                  <Icon name="shopping_bag" style={{ fontSize: '30px' }}/>
                  <span className='header-icon-count'>6</span>
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
           
           {/* bread-crums btn */}
            <div className="bread-crums-btn">
               <a href="#" style={{ display: 'flex' }} onClick={() => setIsSlideMenuActive(!isSlideCartActive)}>
                <div className="header-icon">
                  <Icon name="menu" style={{ fontSize: '27px' }} />
                </div>
                </a>
            </div>
          </div>
        </div>    
      </div>
     
     {/* only mobile - header bottom */}
     <section className='header-bottom-section'>
      <div className='header-bottom-row'>
          <div className="header-bottom-search" style={{width:'80%'}}>
            <form className="header-bottom-form">
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
        </div>
     </section>
 
      {/* Side Cart */}
        <SlideCart isSlideCartActive={isSlideCartActive} setIsSlideCartActive={setIsSlideCartActive}/>   
      {/* Only mobile - Side Menu */}
        <SlideNav isSlideMenuActive={isSlideMenuActive} setIsSlideMenuActive={setIsSlideMenuActive}/>
      
       </div>    
     </header>
 
    </>
  );
};

export default Header;
