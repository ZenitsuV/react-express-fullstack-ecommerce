import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import ProductDetails from './components/pages/ProductDetails';
import Shop from './components/pages/Shop';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';
import Orders from './components/pages/Orders';
import OrderDetails from './components/pages/OrderDetails';
import Wishlist from './components/pages/Wishlist';
import Register from './components/pages/Register';
import Login from './components/pages/Login';

// for admin
import NewProduct from './components/admin/NewProduct';
import ViewProducts from './components/admin/ViewProducts';
import NewCategory from './components/admin/NewCategory';
import ViewCategories from './components/admin/ViewCategories';
import NewSubCategory from './components/admin/NewSubCategory';
import ViewSubCategories from './components/admin/ViewSubCategories';
import NewBrand from './components/admin/NewBrand';
import ViewBrands from './components/admin/ViewBrands';


function App() {
  return (
      <Router>
         <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Shop" element={<Shop/>}></Route>
            <Route path="/Cart" element={<Cart/>}></Route>
            <Route path="/Checkout" element={<Checkout/>}></Route>
            <Route path="/Orders" element={<Orders/>}></Route>
            <Route path="/OrderDetails" element={<OrderDetails/>}></Route>
            <Route path="/Wishlist" element={<Wishlist/>}></Route>
            <Route path="/Register" element={<Register/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/ProductDetails/:productId" element={<ProductDetails/>}></Route>

          {/* admin routes */}

           {/* Product */}
            <Route path="/NewProduct" element={<NewProduct/>}></Route>
            <Route path="/EditProduct" element={<NewProduct/>}></Route>
            <Route path="/ViewProducts" element={<ViewProducts/>}></Route>

            {/* Category */}
            <Route path="/NewCategory" element={<NewCategory/>}></Route>
            <Route path="/EditCategory" element={<NewCategory/>}></Route>
            <Route path="/ViewCategories" element={<ViewCategories/>}></Route>

            {/* Sub Category */}
            <Route path="/NewSubCategory" element={<NewSubCategory/>}></Route>
            <Route path="/EditSubCategory" element={<NewSubCategory/>}></Route>
            <Route path="/ViewSubCategories" element={<ViewSubCategories/>}></Route>

             {/* Brand */}
             <Route path="/NewBrand" element={<NewBrand/>}></Route>
             <Route path="/EditBrand" element={<NewBrand/>}></Route>
             <Route path="/ViewBrands" element={<ViewBrands/>}></Route>

          {/* <Route path="*" element={<NotFound/>}></Route> */}
        </Routes>
   </Router>
  );
}

export default App;
