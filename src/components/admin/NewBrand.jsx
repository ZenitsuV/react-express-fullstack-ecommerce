import React, {useState, useEffect} from 'react';
import {  Link, useLocation } from 'react-router-dom';
import './NewProduct.css';
import Header from '../layout/section/Header';
import NavigationPath from '../layout/UI/NavigationPath';
import Footer from '../layout/section/Footer';
import NewBrandForm from './NewBrandForm';
import BrandEditForm from './BrandEditForm';

const NewBrand = () => {
    const location = useLocation();
    let  isEdit = false;
    let id;

    if(location.state) {
        isEdit  = location.state.isEdit ?? false;
        id  = location.state.id ?? null;
    }

    return (
        <>
            <Header/>
            <NavigationPath/>
            <section className='register-section'>
                <div className='container' style={{flexDirection: "column"}}>
                    <div className='section-title'>
                        <h2 className='title'>{isEdit ? "Update Brand" : "Add New Brand"}</h2>
                        <p>Best place to buy and sell digital products.</p>
                    </div>
                    
                    <div className='row'>
                        <div className='register-wrapper'>
                            <div className='register-container'>
                               <div className='register-form'>
                                    <div style={{justifyContent: "flex-end", display: "flex",gap:"10px"}}>
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
                                        <Link to="/ViewBrands">View</Link>
                                        </button>
                                    </div>
                                    {!isEdit && <NewBrandForm/>}
                                    {isEdit && <BrandEditForm id={id} />}
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

export default NewBrand;