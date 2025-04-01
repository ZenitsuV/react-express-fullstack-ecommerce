import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import ProductDetails from './components/pages/ProductDetails';
import Shop from './components/pages/Shop';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';
import Register from './components/pages/Register';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Shop" element={<Shop/>}></Route>
          <Route path="/Cart" element={<Cart/>}></Route>
          <Route path="/Checkout" element={<Checkout/>}></Route>
          <Route path="/Register" element={<Register/>}></Route>
          <Route path="/ProductDetails/:productId" element={<ProductDetails/>}></Route>
          {/* <Route path="*" element={<NotFound/>}></Route> */}
        </Routes>
    </Router>
  );
}

export default App;
