import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Checkout.css';
import Header from '../layout/section/Header';
import NavigationPath from '../layout/UI/NavigationPath';
import LoginForm from '../layout/UI/LoginForm';
import GuestForm from '../layout/UI/GuestForm';
import Footer from '../layout/section/Footer';
import { Icon } from '../common/Utilities';

const Checkout = () => {
  const [checkOpt, setCheckOpt] = useState("guest");
  const [guestFormVisible, setGuestFormVisible] = useState(false);

  const handleCheckOptions = () => {
    setGuestFormVisible(false);
    setCheckOpt("register");
  }

    return (
        <>
            <Header/>
            <NavigationPath/>
              <section className='checkout-section pd-tb-40'>
                <div className='container'>
                   <div className='row'>
                      <div className='checkout-left-side'>                 
                        <div className="sidebar-wrap">
                            <div className="sidebar-block">
                            <div className="sb-title"><h3 className="sidebar-title">Summary</h3></div>
                            <div className="sb-block-content">
                                <div className="checkout-summary">
                                <div>
                                    <span className="text-left">Sub-Total</span
                                    ><span className="text-right">$512.00</span>
                                </div>
                                <div>
                                    <span className="text-left">Delivery Charges</span
                                    ><span className="text-right">$102.40</span>
                                </div>
                                <div>
                                    <div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-left">Coupon Discount</span
                                        ><span className="text-right" style={{marginLeft: "90px"}}><a className="checkout-coupon cursor-pointer"
                                            >Apply Discount</a
                                        ></span
                                        >
                                    </div>
                                    </div>
                                </div>
                                <div className="checkout-coupan-content">
                                    <form
                                    className="checkout-coupan-form"
                                    name="checkout-coupan-form"
                                    method="post"
                                    action="#"
                                    >
                                    <input
                                        className="coupan"
                                        required=""
                                        placeholder="Enter Your Coupan Code"
                                        type="text"
                                        value=""
                                        name="coupan"
                                    /><button
                                        className="coupan-btn btn-2"
                                        type="submit"
                                        name="subscribe"
                                    >
                                        Apply
                                    </button>
                                    </form>
                                </div>
                                <div className="checkout-summary-total">
                                    <span className="text-left">Total Amount</span
                                    ><span className="text-right">$614.40</span>
                                </div>
                                </div>
                                <div className="checkout-pro">
                                <div className="col-sm-12 mb-6">
                                    <div className="product-inner">
                                    <div className="pro-image-outer">
                                        <div className="pro-image">
                                        <a href="/product-left-sidebar" className="image"
                                            ><img
                                            className="main-image"
                                            alt="Product"
                                            src="https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/3_1.jpg" /><img
                                            className="hover-image"
                                            alt="Product"
                                            src="https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/3_1.jpg"
                                        /></a>
                                        </div>
                                    </div>
                                    <div className="pro-content">
                                        <h5 className="pro-title">
                                        <a href="/product-left-sidebar">Multi Grain Combo Cookies</a>
                                        </h5>
                                        <div className="pro-rating">
                                        <span className="pro-rating"
                                            ><i className="gicon star fill"></i
                                            ><i className="gicon star fill"></i
                                            ><i className="gicon star fill"></i
                                            ><i className="gicon star "></i
                                            ><i className="gicon star "></i
                                        ></span>
                                        </div>
                                        <span className="price"
                                        ><span className="old-price">$30.00 </span
                                        ><span className="new-price">$25.00</span></span
                                        >
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 mb-6">
                                    <div className="product-inner">
                                    <div className="pro-image-outer">
                                        <div className="pro-image">
                                        <a href="/product-left-sidebar" className="image"
                                            ><img
                                            className="main-image"
                                            alt="Product"
                                            src="https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/9_1.jpg" /><img
                                            className="hover-image"
                                            alt="Product"
                                            src="https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/9_2.jpg"
                                        /></a>
                                        </div>
                                    </div>
                                    <div className="pro-content">
                                        <h5 className="pro-title">
                                        <a href="/product-left-sidebar">Fresh Mango juice pack</a>
                                        </h5>
                                        <div className="pro-rating">
                                        <span className="pro-rating"
                                            ><i className="gicon star fill"></i
                                            ><i className="gicon star fill"></i
                                            ><i className="gicon star "></i
                                            ><i className="gicon star "></i
                                            ><i className="gicon star "></i
                                        ></span>
                                        </div>
                                        <span className="price"
                                        ><span className="old-price">$65.00 </span
                                        ><span className="new-price">$46.00</span></span
                                        >
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 mb-6">
                                    <div className="product-inner">
                                    <div className="pro-image-outer">
                                        <div className="pro-image">
                                        <a href="/product-left-sidebar" className="image"
                                            ><img
                                            className="main-image"
                                            alt="Product"
                                            src="https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/2_1.jpg" /><img
                                            className="hover-image"
                                            alt="Product"
                                            src="https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/2_2.jpg"
                                        /></a>
                                        </div>
                                    </div>
                                    <div className="pro-content">
                                        <h5 className="pro-title">
                                        <a href="/product-left-sidebar">Dates Value Fresh Pouch</a>
                                        </h5>
                                        <div className="pro-rating">
                                        <span className="pro-rating"
                                            ><i className="gicon star fill"></i
                                            ><i className="gicon star fill"></i
                                            ><i className="gicon star fill"></i
                                            ><i className="gicon star "></i
                                            ><i className="gicon star "></i
                                        ></span>
                                        </div>
                                        <span className="price"
                                        ><span className="old-price">$85.00 </span
                                        ><span className="new-price">$78.00</span></span
                                        >
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 mb-6">
                                    <div className="product-inner">
                                    <div className="pro-image-outer">
                                        <div className="pro-image">
                                        <a href="/product-left-sidebar" className="image"
                                            ><img
                                            className="main-image"
                                            alt="Product"
                                            src="https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/1_1.jpg" /><img
                                            className="hover-image"
                                            alt="Product"
                                            src="https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/1_2.jpg"
                                        /></a>
                                        </div>
                                    </div>
                                    <div className="pro-content">
                                        <h5 className="pro-title">
                                        <a href="/product-left-sidebar">Stick Fiber Masala Magic</a>
                                        </h5>
                                        <div className="pro-rating">
                                        <span className="pro-rating"
                                            ><i className="gicon star fill"></i
                                            ><i className="gicon star fill"></i
                                            ><i className="gicon star "></i
                                            ><i className="gicon star "></i
                                            ><i className="gicon star "></i
                                        ></span>
                                        </div>
                                        <span className="price"
                                        ><span className="old-price">$50.00 </span
                                        ><span className="new-price">$45.00</span></span
                                        >
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 mb-6">
                                    <div className="product-inner">
                                    <div className="pro-image-outer">
                                        <div className="pro-image">
                                        <a href="/product-left-sidebar" className="image"
                                            ><img
                                            className="main-image"
                                            alt="Product"
                                            src="https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/17_1.jpg" /><img
                                            className="hover-image"
                                            alt="Product"
                                            src="https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/17_1.jpg"
                                        /></a>
                                        </div>
                                    </div>
                                    <div className="pro-content">
                                        <h5 className="pro-title">
                                        <a href="/product-left-sidebar">Fresh Organic Ginger Pack</a>
                                        </h5>
                                        <div className="pro-rating">
                                        <span className="pro-rating"
                                            ><i className="gicon star fill"></i
                                            ><i className="gicon star fill"></i
                                            ><i className="gicon star "></i
                                            ><i className="gicon star "></i
                                            ><i className="gicon star "></i
                                        ></span>
                                        </div>
                                        <span className="price"
                                        ><span className="old-price">$3.00 </span
                                        ><span className="new-price">$2.00</span></span
                                        >
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 mb-6">
                                    <div className="product-inner">
                                    <div className="pro-image-outer">
                                        <div className="pro-image">
                                        <a href="/product-left-sidebar" className="image"
                                            ><img
                                            className="main-image"
                                            alt="Product"
                                            src="https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/4_1.jpg" /><img
                                            className="hover-image"
                                            alt="Product"
                                            src="https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/4_2.jpg"
                                        /></a>
                                        </div>
                                    </div>
                                    <div className="pro-content">
                                        <h5 className="pro-title">
                                        <a href="/product-left-sidebar">Natural Hub Cherry Karonda</a>
                                        </h5>
                                        <div className="pro-rating">
                                        <span className="pro-rating"
                                            ><i className="gicon star fill"></i
                                            ><i className="gicon star fill"></i
                                            ><i className="gicon star fill"></i
                                            ><i className="gicon star fill"></i
                                            ><i className="gicon star "></i
                                        ></span>
                                        </div>
                                        <span className="price"
                                        ><span className="old-price">$65.00 </span
                                        ><span className="new-price">$49.00</span></span
                                        >
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 mb-6">
                                    <div className="product-inner">
                                    <div className="pro-image-outer">
                                        <div className="pro-image">
                                        <a href="/product-left-sidebar" className="image"
                                            ><img
                                            className="main-image"
                                            alt="Product"
                                            src="https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/5_1.jpg" /><img
                                            className="hover-image"
                                            alt="Product"
                                        /></a>
                                        </div>
                                    </div>
                                    <div className="pro-content">
                                        <h5 className="pro-title">
                                        <a href="/product-left-sidebar"
                                            >Berry &amp; Graps Mix Snack</a
                                        >
                                        </h5>
                                        <div className="pro-rating">
                                        <span className="pro-rating"
                                            ><i className="gicon star "></i
                                            ><i className="gicon star "></i
                                            ><i className="gicon star "></i
                                            ><i className="gicon star "></i
                                            ><i className="gicon star "></i
                                        ></span>
                                        </div>
                                        <span className="price"
                                        ><span className="old-price">$56.00 </span
                                        ><span className="new-price">$52.00</span></span
                                        >
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 mb-6">
                                    <div className="product-inner">
                                    <div className="pro-image-outer">
                                        <div className="pro-image">
                                        <a href="/product-left-sidebar" className="image"
                                            ><img
                                            className="main-image"
                                            alt="Product"
                                            src="https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/6_1.jpg" /><img
                                            className="hover-image"
                                            alt="Product"
                                            src="https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/6_2.jpg"
                                        /></a>
                                        </div>
                                    </div>
                                    <div className="pro-content">
                                        <h5 className="pro-title">
                                        <a href="/product-left-sidebar">Mixed Nuts Berries Pack</a>
                                        </h5>
                                        <div className="pro-rating">
                                        <span className="pro-rating"
                                            ><i className="gicon star fill"></i
                                            ><i className="gicon star fill"></i
                                            ><i className="gicon star fill"></i
                                            ><i className="gicon star fill"></i
                                            ><i className="gicon star "></i
                                        ></span>
                                        </div>
                                        <span className="price"
                                        ><span className="old-price">$56.00 </span
                                        ><span className="new-price">$45.00</span></span
                                        >
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="sidebar-wrap checkout-pay-wrap">
                            <div className="sidebar-block">
                            <div className="sb-title">
                                <h3 className="sidebar-title">Payment Method</h3>
                            </div>
                            <div className="sb-block-content">
                                <div className="checkout-pay">
                                <div className="pay-desc">
                                    Please select the preferred payment method to use on this order.
                                </div>
                                <form action="#">
                                    <span className="pay-option">
                                        <span
                                        ><input
                                        readonly=""
                                        id="pay1"
                                        type="radio"
                                        value=""
                                        checked="true"
                                        name="radio-group"/>
                                        <label for="pay1">Cash On Delivery</label>
                                      </span>
                                    </span>
                                    <span className="pay-commemt">
                                    <span className="pay-opt-head">Add Comments About Your Order</span>
                                    <textarea
                                        name="your-commemt"
                                        placeholder="Comments">
                                    </textarea></span>               
                                </form>
                                </div>
                            </div>
                            </div>
                        </div>
                      </div>
                      <div className='checkout-right-side' style={{width:"70%"}}>
                        <div className='checkout-content'>
                            <div className='checkout-inner'>
                                <div className='checkout-wrap m-b-40'>
                                    <div className='checkout-block'>
                                        <h3 className='checkout-title'>New Customer</h3>
                                        <div className='check-block-content'>
                                            <div className='check-subtitle'>Checkout Options</div>
                                            <form action="#">
                                                <span className="new-option">
                                                    <span>
                                                    <input
                                                        id="account2"
                                                        type="radio"
                                                        value="guest"                                     
                                                        name="radio-group"
                                                        checked={checkOpt === "guest"}
                                                        />
                                                        <label for="account2" onClick={() => setCheckOpt("guest")}>Guest Account</label>
                                                    </span>
                                                    <span>
                                                    <input
                                                        id="account1"
                                                        type="radio"
                                                        value="register"
                                                        name="radio-group"
                                                        checked={checkOpt === "register"}
                                                        />
                                                        <label for="account1" onClick={handleCheckOptions}>Register Account</label>
                                                    </span>
                                                    <span>
                                                    <input
                                                        id="account3"
                                                        type="radio"
                                                        value="login"
                                                        name="radio-group"
                                                        checked={checkOpt === "login"}
                                                        />
                                                        <label for="account3" onClick={() => setCheckOpt("login")}>Login Account</label>
                                                    </span>
                                                 </span>
                                            </form>

                                            {(!guestFormVisible && checkOpt !== "login") ?
                                            <div className='new-desc'>
                                               By creating an account you will be able to shop faster, be up to date on an order`s status, and keep track of the orders you have previously made.
                                            </div> : "" }
                                     
                                            {(!guestFormVisible && checkOpt === "guest") ?  <div className='new-btn'><button className='btn-2' style={{cursor:"pointer", textTransform:"uppercase"}} onClick={() => setGuestFormVisible(true)}>Continue</button>  </div> : ""}
                                            {(!guestFormVisible && checkOpt === "register") ? <div className='new-btn'><Link to="/register"><button className='btn-2' style={{cursor:"pointer", textTransform:"uppercase"}} >Continue</button></Link>  </div>: ""}
                                                                                                         
                                        </div>
                                    </div>
                                </div>

                                {/* Guest form */}
                                {guestFormVisible && 
                                <div className='checkout-wrap'>
                                    <div className='checkout-block check-bill'>
                                        <h3 className='checkout-title'>Billing Details</h3>
                                        <div className='bl-block-content'>                                       
                                            <GuestForm/>
                                        </div>
                                    </div>
                                </div> }

                                {/* Login Form */}
                                 {checkOpt === "login" ?  <div className='login-wrapper' style={{margin:0, maxWidth:"inherit"}}><LoginForm isCheckout="true" /></div> : "" }   
                            </div>
                        </div>
                      </div>
                    </div>   
                </div>
              </section>
            <Footer/>
        </>
    )
}

export default Checkout;
