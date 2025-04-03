import React from 'react';
import Header from '../layout/section/Header';
import NavigationPath from '../layout/UI/NavigationPath';
import CategorySwiper from '../layout/section/CategorySwiper';
import DealsSection from '../layout/section/DealsSection';
import Banner from '../common/Banner';
import NewArrivalsSection from '../layout/section/NewArrivalsSection';
import ServiceSection from '../layout/section/ServiceSection';
import Footer from '../layout/section/Footer';

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
