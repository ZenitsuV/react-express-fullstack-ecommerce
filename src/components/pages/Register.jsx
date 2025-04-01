import React from 'react';
import './Register.css';
import Header from '../layout/Header';
import NavigationPath from '../layout/NavigationPath';
import Footer from '../layout/Footer';

const Register = () => {
    return (
        <>
            <Header/>
            <NavigationPath/>
            <section className='register-section'>
                <div className='container' style={{flexDirection: "column"}}>
                    <div className='section-title'>
                        <h2 className='title'>Register</h2>
                        <p>Best place to buy and sell digital products.</p>
                    </div>
                    <div className='row'>
                        <div className='register-wrapper'>
                            <div className='register-container'>
                               <div className='register-form'>
                             
                                 <form novalidate="" className="">
                                    <span className="register-wrap register-half">
                                        <label for="firstname">First Name*</label>
                                        <div>
                                        <input
                                            placeholder="Enter your first name"
                                            required=""
                                            className="form-control"
                                            type="text"
                                            value=""
                                            name="firstName"/>
                                        </div>
                                        </span>
                                        <span className="register-wrap register-half">
                                            <label>Last Name*</label>
                                        <div>
                                        <input
                                            placeholder="Enter your last name"
                                            required=""
                                            className="form-control"
                                            type="text"
                                            value=""
                                            name="lastName"/>
                                        </div>
                                        </span>
                                        <span className="register-wrap register-half" style={{marginTop: "10px"}}>
                                            <label>Email*</label>
                                        <div>
                                        <input
                                            placeholder="Enter your email add..."
                                            required=""
                                            className="form-control"
                                            type="email"
                                            value=""
                                            name="email"/>
                                        </div>
                                        </span>
                                        <span className="register-wrap register-half" style={{marginTop: "10px"}}>
                                            <label>Phone Number*</label>
                                        <div>
                                        <input
                                            placeholder="Enter your phone number"
                                            pattern="^\d{10,12}$"
                                            required=""
                                            className="form-control"
                                            type="text"
                                            value=""
                                            name="phoneNumber"/>
                                        </div>
                                        </span>
                                        <span className="register-wrap register-half" style={{marginTop: "10px"}}>
                                            <label>Password*</label>
                                        <div>
                                        <input
                                            placeholder="Enter your password"
                                            pattern="^\d{6,12}$"
                                            required=""
                                            className="form-control"
                                            type="password"
                                            value=""
                                            name="password"/>
                                        </div>
                                        </span>
                                        <span className="register-wrap register-half" style={{marginTop: "10px"}}>
                                            <label>Conform Password*</label>
                                        <div>
                                        <input
                                            placeholder="Enter your Conform password"
                                            pattern="^\d{6,12}$"
                                            required=""
                                            className="form-control"
                                            type="password"
                                            value=""
                                            name="confirmPassword"/>
                                        </div>
                                        </span>
                                        <span className="register-wrap" style={{marginTop: "10px"}}>
                                            <label>Address</label>
                                        <div>
                                        <input
                                            placeholder="Address Line 1"
                                            required=""
                                            className="form-control"
                                            type="text"
                                            value=""
                                            name="address"
                                            style={{width:"97%"}}
                                            />
                                        </div>
                                        </span>
                                        <span className="register-wrap register-half" style={{marginTop: "10px"}}>
                                            <label>Country *</label>
                                        <div className="rg-select-inner  ">
                                        <select
                                            name="country"
                                            required=""
                                            className="register-select form-select form-select-sm"
                                            id="select-country">
                                            <option value="" disabled="">Country</option>
                                            <option value="IN">India</option>      
                                        </select>
                                        </div>
                                        </span>
                                        <span className="register-wrap register-half" style={{marginTop: "10px"}}>
                                            <label>Region State</label>
                                        <div className="rg-select-inner  ">
                                        <select
                                            name="state"
                                            required=""
                                            className="register-select form-select form-select-sm"
                                            id="select-state">
                                            <option value="" disabled="">Region/State</option>
                                        </select>
                                        </div>
                                        </span>
                                        <span className="register-wrap register-half" style={{marginTop: "10px"}}>
                                            <label>City *</label>
                                        <div className="rg-select-inner">
                                        <select
                                            name="city"
                                            required=""
                                            className="register-select form-select form-select-sm"
                                            id="select-city"
                                        >
                                            <option value="" disabled="">City</option>
                                        </select>
                                        </div>
                                        </span>
                                        <span className="register-wrap register-half" style={{marginTop: "10px"}}>
                                        <label>Post Code</label>
                                        <div>
                                        <input
                                            pattern="^\d{5,6}$"
                                            placeholder="Post Code"
                                            required=""
                                            className="form-control"
                                            type="text"
                                            value=""
                                            name="postCode"/>
                                        </div>
                                        </span>
                                        <span className="register-wrap recaptcha">
                                            <span
                                            className="g-recaptcha"
                                            data-sitekey="6LfKURIUAAAAAO50vlwWZkyK_G2ywqE52NU7YO0S"
                                            data-callback="verifyRecaptchaCallback"
                                            data-expired-callback="expiredRecaptchaCallback">
                                        </span>
                                        <input
                                            className="form-control d-none"
                                            data-recaptcha="true"
                                            required=""
                                            data-error="Please complete the Captcha" />
                                            <span className="help-block with-errors"></span>
                                        </span>
                                        <span className="register-wrap register-btn" style={{marginTop: "10px"}}>
                                            <span>Already have an account?<a href="/login">Login</a></span>
                                            <button className="btn-1" type="submit">Register</button></span>
                                    </form>

                            
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

export default Register;