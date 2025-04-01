import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import Header from '../layout/Header';
import NavigationPath from '../layout/NavigationPath';
import Footer from '../layout/Footer';
import ProductQtyForm from '../common/ProductQtyForm';
import { Icon } from '../common/Utilities';

const Cart = () => {
    return (
        <>
          <Header />
          <NavigationPath/>
           <section className='cart-section pd-tb-40 '>
             <div className='container'>
                <div className='row'>                 
                    <div className='cart-left-side'>                      
                        <div className="sidebar-wrap">
                            <div className="sidebar-block">
                            <div className="sb-title">
                                <h3 className="sidebar-title">Summary</h3>
                            </div>
                            <div className="sb-block-content">
                                <h4 className="ship-title">Estimate Shipping</h4>
                                <div className="cart-form">
                                <p>Enter your destination to get a shipping estimate</p>
                                <form action="#" method="post">
                                    <span className="cart-wrap">
                                    <label>Country *</label>
                                    <span className="cart-select-inner">
                                        <select
                                        name="cart_country"
                                        id="cart-select-country"
                                        className="cart-select"
                                        >
                                        <option value="" disabled="" selected="">Country</option>
                                        <option value="AF">Afghanistan</option>
                                        <option value="AX">Aland Islands</option>
                                        </select>
                                    </span>
                                    </span>
                                    <span className="cart-wrap">
                                    <label>State/Province</label>
                                    <span className="cart-select-inner">
                                        <select
                                        name="state"
                                        id="select-state"
                                        className="register-select"
                                        >
                                        <option value="" disabled="">Region/State</option>
                                        </select></span
                                    ></span
                                    ><span className="cart-wrap">
                                    <label>Zip/Postal Code</label>
                                    <input
                                        placeholder="Zip/Postal Code"
                                        type="text"
                                        name="postalcode"
                                    />
                                    </span>
                                </form>
                                </div>
                            </div>
                            <div className="sb-block-content">
                                <div className="cart-summary-bottom">
                                <div className="cart-summary">
                                    <div>
                                    <span className="text-left">Sub-Total</span>
                                    <span className="text-right">$512.00</span>
                                    </div>
                                    <div>
                                    <span className="text-left">Delivery Charges</span>
                                    <span className="text-right">$102.40</span>
                                    </div>
                                    <div>
                                    <div>
                                        <div className="flex justify-between items-center">
                                        <span className="text-left">Coupon Discount</span>
                                        <span className="text-right" style={{marginLeft: "90px"}}>
                                            <a className="checkout-coupon cursor-pointer" style={{textDecoration: 'underline'}}
                                            >Apply Discount</a
                                            >
                                        </span>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="cart-coupan-content">
                                    <form
                                        className="cart-coupan-form"
                                        name="cart-coupan-form"
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
                                        />
                                        <button className="btn-2" type="submit" name="subscribe" style={{width: '100px'}}>
                                        Apply
                                        </button>
                                    </form>
                                    </div>
                                    <div className="cart-summary-total">
                                      <span className="text-left">Total Amount</span>
                                      <span className="text-right">$614.40</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className='cart-right-side'>
                    <div className="cart-content">
                        <div className="cart-inner">
                          <div className="row">
                            <form action="#" style={{width: '100%'}}>
                                <div className="table-content cart-table-content">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th style={{textAlign: "center"}}>Quantity</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td data-label="Product" className="cart-pro-name">
                                        <a href="/product-left-sidebar"
                                            ><img
                                            className="cart-pro-img mr-4"
                                            alt=""
                                            src="https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/3_1.jpg"
                                            />Multi Grain Combo Cookies</a
                                        >
                                        </td>
                                        <td data-label="Price" className="cart-pro-price">
                                        <span className="amount">$25</span>
                                        </td>
                                        <td
                                        data-label="Quantity"
                                        className="cart-pro-qty"
                                        style={{textAlign: "center"}}
                                        >
                                         <ProductQtyForm />  
                                        </td>
                                        <td data-label="Total" className="cart-pro-subtotal">$100</td>
                                        <td data-label="Remove" className="cart-pro-remove">
                                        <a href="#"><Icon name="delete" /></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-label="Product" className="cart-pro-name">
                                        <a href="/product-left-sidebar"
                                            ><img
                                            className="cart-pro-img mr-4"
                                            alt=""
                                            src="https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/9_1.jpg"
                                            />Fresh Mango juice pack</a
                                        >
                                        </td>
                                        <td data-label="Price" className="cart-pro-price">
                                        <span className="amount">$46</span>
                                        </td>
                                        <td
                                        data-label="Quantity"
                                        className="cart-pro-qty"
                                       style={{textAlign: "center"}}
                                        >
                                          <ProductQtyForm />  
                                        </td>
                                        <td data-label="Total" className="cart-pro-subtotal">$92</td>
                                        <td data-label="Remove" className="cart-pro-remove">
                                        <a href="#"><Icon name="delete" /></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-label="Product" className="cart-pro-name">
                                        <a href="/product-left-sidebar"
                                            ><img
                                            className="cart-pro-img mr-4"
                                            alt=""
                                            src="https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/2_1.jpg"
                                            />Dates Value Fresh Pouch</a
                                        >
                                        </td>
                                        <td data-label="Price" className="cart-pro-price">
                                        <span className="amount">$78</span>
                                        </td>
                                        <td
                                        data-label="Quantity"
                                        className="cart-pro-qty"
                                       style={{textAlign: "center"}}
                                        >
                                         <ProductQtyForm />  
                                        </td>
                                        <td data-label="Total" className="cart-pro-subtotal">$78</td>
                                        <td data-label="Remove" className="cart-pro-remove">
                                        <a href="#"><Icon name="delete" /></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-label="Product" className="cart-pro-name">
                                        <a href="/product-left-sidebar"
                                            ><img
                                            className="cart-pro-img mr-4"
                                            alt=""
                                            src="https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/1_1.jpg"
                                            />Stick Fiber Masala Magic</a
                                        >
                                        </td>
                                        <td data-label="Price" className="cart-pro-price">
                                        <span className="amount">$45</span>
                                        </td>
                                        <td
                                        data-label="Quantity"
                                        className="cart-pro-qty"
                                       style={{textAlign: "center"}}
                                        >
                                         <ProductQtyForm />  
                                        </td>
                                        <td data-label="Total" className="cart-pro-subtotal">$45</td>
                                        <td data-label="Remove" className="cart-pro-remove">
                                        <a href="#"><Icon name="delete" /></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-label="Product" className="cart-pro-name">
                                        <a href="/product-left-sidebar"
                                            ><img
                                            className="cart-pro-img mr-4"
                                            alt=""
                                            src="https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/17_1.jpg"
                                            />Fresh Organic Ginger Pack</a
                                        >
                                        </td>
                                        <td data-label="Price" className="cart-pro-price">
                                        <span className="amount">$2</span>
                                        </td>
                                        <td
                                        data-label="Quantity"
                                        className="cart-pro-qty"
                                        style={{textAlign: "center"}}
                                        >
                                          <ProductQtyForm />  
                                        </td>
                                        <td data-label="Total" className="cart-pro-subtotal">$2</td>
                                        <td data-label="Remove" className="cart-pro-remove">
                                        <a href="#"><Icon name="delete" /></a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                                <div className="row" style={{padding: '0 10px'}}>
                                <div className="col-lg-12" style={{width:'95%'}}>
                                    <div className="cart-update-bottom">
                                     <a href="/">Continue Shopping</a>
                                     <Link to="/Checkout">Check Out</Link>
                                    </div>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>

                    </div>
                </div>
             </div>
           </section>
          <Footer/>
        </>
    )
};


export default Cart;