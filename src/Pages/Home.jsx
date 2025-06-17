import React from 'react';
import Features from '../Components/Features';
import Faq from '../Components/Faq';
import Banner from '../Components/Banner';
import Nearlyexpire from '../Components/Nearlyexpire';
import Expiryfood from '../Components/Expiryfood';
import Count from '../Components/Count';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Nearlyexpire></Nearlyexpire>
            <Expiryfood></Expiryfood>
            <Count></Count>
            <Features></Features>
            <Faq></Faq>
            
        </div>
    );
};

export default Home;