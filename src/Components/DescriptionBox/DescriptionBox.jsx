import React from 'react';
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descrioptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Review (122)</div>
            </div>

            <div className="descriptionbox-description">
                <p>An E-commerce website  is an online Platform that facilats buying and selling of products  or service  over the internet,service as a virtual marketplace where business and  individe showcase their products</p>

                <p>In ecommerce, specifically, they're the blurbs of text on product pages that tell customers about your product. A good product description describes your product's features and benefits, acknowledges the problem it solves, and declares why it's the best product for the job.</p>
            </div>

        </div>
    );
};

export default DescriptionBox;