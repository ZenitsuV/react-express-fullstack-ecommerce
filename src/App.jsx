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

import NewProduct from './components/admin/NewProduct';
import ViewProducts from './components/admin/ViewProducts';

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
          <Route path="/NewProduct" element={<NewProduct/>}></Route>
          <Route path="/ViewProducts" element={<ViewProducts/>}></Route>
          {/* <Route path="*" element={<NotFound/>}></Route> */}
        </Routes>
   </Router>
  );
}

export default App;
