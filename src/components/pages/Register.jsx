import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import Header from '../layout/section/Header';
import NavigationPath from '../layout/UI/NavigationPath';
import Footer from '../layout/section/Footer';
import RegistrationForm from '../layout/UI/RegistrationForm';

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
                                    <RegistrationForm />
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