import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './NewProduct.css';
import Header from '../layout/section/Header';
import NavigationPath from '../layout/UI/NavigationPath';
import Footer from '../layout/section/Footer';
import NewProductForm from '../admin/NewProductForm';

const NewProduct = () => {
 
    return (
        <>
            <Header/>
            <NavigationPath/>
            <section className='register-section'>
                <div className='container' style={{flexDirection: "column"}}>
                    <div className='section-title'>
                        <h2 className='title'>Add New Product</h2>
                        <p>Best place to buy and sell digital products.</p>
                    </div>
                    
                    <div className='row'>
                        <div className='register-wrapper'>
                            <div className='register-container'>
                               <div className='register-form'>
                                    <div style={{justifyContent: "flex-end", display: "flex"}}>
                                        <button
                                                className=""
                                                type="submit"
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    backgroundColor: "rgb(92, 175, 144)",
                                                    lineHeight: "10px",
                                                    padding: "10px",
                                                    borderRadius: "4px",
                                                    color: "whitesmoke",                                              
                                                }}
                                            >
                                        <Link to="/ViewProducts">View</Link>
                                        </button>
                                    </div>
                                    <NewProductForm />
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

export default NewProduct;