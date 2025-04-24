import React from 'react';
import './NavigationPath.css';
import { Link, useLocation } from 'react-router-dom';
import ProductDetails from '../../pages/ProductDetails';
import NewCategory from '../../admin/NewCategory';

const NavigationPath = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const currentPageName = currentPath.split('/')[1];

    const pageObj = {
      ProductDetails : "Product Details",
      Home : "Home",
      Shop : "Shop Page",
      Cart : "Cart",
      Checkout : "Checkout",
      Wishlist : "Wishlist",
      Orders : "My Orders",
      OrderDetails : "My Order Details",
      register : "Register Page",
      Login : "Login Page",
      NewProduct: "New Product",
      ViewProducts: "View Products",
      EditProduct: "Edit Product",
      NewCategory: "New Category",
      EditCategory: "Edit Category",
      ViewCategories: "View Category",
      NewSubCategory: "New Sub Category",
      EditSubCategory: "Edit Sub Category",
      ViewSubCategories: "View Sub Category",
      NewBrand: "New Brand",
      EditBrand: "Edit Brand",
      ViewBrand:"ViewBrand"
      
   }
  
  
 

    return (
        <>
          <div className='container' style={{paddingTop:'0px'}}>
            <div className='nav-wrapper'>         
                   <div className='nav-page-name'>{pageObj[currentPageName]}</div>
                   <div className='nav-page-path'><Link to="/">Home</Link> &gt; <span>{pageObj[currentPageName] ? pageObj[currentPageName] : "Home"}</span></div>              
            </div>
          </div>
        </>
    )
}


export default NavigationPath;