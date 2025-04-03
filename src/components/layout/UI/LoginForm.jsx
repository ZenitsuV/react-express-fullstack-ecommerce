import React from 'react';
import { Link } from 'react-router-dom';


const LoginForm = ({isCheckout}) => {
    return (
        <>
          
            <div className='login-container'>
                    <form novalidate="" action="#" method="post" className="login-form">
                        <span className="login-wrap">
                            <label>Email Address*</label>
                            <div>
                            <input
                                placeholder="Enter your email add..."
                                required=""
                                className="form-control"
                                type="text"
                                value=""
                                name="name"
                            />
                            <div className="invalid-feedback">Please Enter correct username.</div>
                            </div></span>
                            <span className="login-wrap" style={{marginTop: "24px"}}>
                            <label>Password*</label>
                            <div>
                            <input
                                min="6"
                                placeholder="Enter your password"
                                required=""
                                className="form-control"
                                type="password"
                                value=""
                                name="password"
                            />
                            <div className="invalid-feedback">
                                Password must be at least 6 characters
                            </div>
                            </div>
                          </span>

                            {!isCheckout && 
                             <span className="login-wrap login-fp">
                                <label><a href="/forgot-password/">Forgot Password?</a></label>
                            </span> }
                            
                            <span className="login-wrap login-btn">
                                {!isCheckout && <span><a href="/register" className="">Create Account?</a></span>}
                                {isCheckout && <button className="btn-1 btn" type="submit" style={{marginTop:"10px"}}>Continue</button>}
                                {!isCheckout && <button className="btn-1 btn" type="submit">Login</button>}
                            </span>
                        </form>
                </div>
            
        </>
    )
}

export default LoginForm;