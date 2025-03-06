import { useState } from 'react';
import './App.css';
import Header from './components/layout/Header';
import CategorySwiper from './components/layout/CategorySwiper';
import DealsSection from './components/layout/DealsSection';

function App() {
  return (
    <>
      <Header />
      <CategorySwiper/>
      <DealsSection/>
 
    </>
  );
}

export default App;
