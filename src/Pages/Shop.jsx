import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offer from '../Components/Offer/Offer';
import NewCollection from '../Components/NewCollection/NewCollection';

const Shop = () => {
    return (
        <div>
            <Hero></Hero>
            <Popular ></Popular>
            <Offer></Offer>
            <NewCollection></NewCollection>

        </div>
    );
};

export default Shop;