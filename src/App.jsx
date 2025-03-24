import { useState } from 'react';
import './App.css';
import {Icon} from './components/common/Utilities'
import Header from './components/layout/Header';
import NavigationPath from './components/layout/NavigationPath';
import CategorySwiper from './components/layout/CategorySwiper';
import DealsSection from './components/layout/DealsSection';
import Banner from './components/common/Banner';
import NewArrivalsSection from './components/layout/NewArrivalsSection';
import ServiceSection from './components/layout/ServiceSection';
import Footer from './components/layout/Footer';

import ProductDetails from './components/pages/ProductDetails';
import Shop from './components/pages/Shop';


function App() {


  return (
    <>
      <Header />
      <NavigationPath />
      {/* <CategorySwiper/>
      <DealsSection/>
      <Banner bannerType='Large'/> 
      <NewArrivalsSection />
      <Banner bannerType='Small' />
      <ServiceSection /> */}
      {/* <ProductDetails /> */}
      <Shop />
      <Footer />
    </>
  );
}

export default App;
