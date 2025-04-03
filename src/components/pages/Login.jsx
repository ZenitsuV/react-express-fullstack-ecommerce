import React from 'react';
import './Login.css';
import Header from '../layout/section/Header';
import NavigationPath from '../layout/UI/NavigationPath';
import Footer from '../layout/section/Footer';
import LoginForm from '../layout/UI/LoginForm';

const Login = () => {
    return (
        <>
          <Header/>
          <NavigationPath/>
          <section className='login-section pd-tb-40 '>
            <div className='container' style={{flexDirection: "column"}}>
                <div className='section-title'>
                    <h2 className='title'>Login</h2>
                    <p>Get access to your Orders, Wishlist and Recommendations.</p>
                </div>
                <div className='login-content'>
                    <div className='login-box'> 
                    <div className='login-wrapper'>                      
                           <LoginForm />                    
                     </div>
                    </div>
                </div>
            </div>
          </section>
          <Footer/>
        </>
    )
}

export default Login;