import React from 'react';
import Header from '../layout/Header';
import NavigationPath from '../layout/NavigationPath';
import CategorySwiper from '../layout/CategorySwiper';
import DealsSection from '../layout/DealsSection';
import Banner from '../common/Banner';
import NewArrivalsSection from '../layout/NewArrivalsSection';
import ServiceSection from '../layout/ServiceSection';
import Footer from '../layout/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <CategorySwiper/>
            <DealsSection/>
            <Banner bannerType='Large'/> 
            <NewArrivalsSection />
            <Banner bannerType='Small' />
            <ServiceSection />         
            <Footer />
        </>
    )
}

export default Home;
