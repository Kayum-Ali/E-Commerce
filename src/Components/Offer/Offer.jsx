import React from 'react';
import exclusive_img from '../Assetes/exclusive_image.png'
import './Offer.css'

const Offer = () => {
    return (
        <div className='offer'>
            <div className='offer-left'>
                <h1>Exclusive</h1>
                <h1>offers for you</h1>
                <p>ONLY ON BEST SELERS PRODUCTS</p>
                <button>Check Now</button>

            </div>
            <div className="offer-right">
                <img src={exclusive_img} alt="" />

            </div>

        </div>
    );
};

export default Offer;