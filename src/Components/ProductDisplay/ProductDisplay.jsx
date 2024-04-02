import React from 'react';
import './ProductDisplay.css'
import star_icon from '../Assetes/star_icon.png'
import star_dull_icon from '../Assetes/star_dull_icon.png'

const ProductDisplay = (props) => {
    const { product } = props

    console.log(product)
    return (
        <div className='productDisplay'>
            <div className="left">
                <div className="img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />

                </div>
                <div className='productdisplay-img'>
                    <img className='productDisplay-main-img' src={product.image} alt="" />

                </div>

            </div>
            <div className="right">
                <h1>{product.name}</h1>
                <div className="productDisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>

                </div>

                <div className="productDisplay-right-prices">
                    <div className='productDisplay-right-prices-old' >${product.old_price}</div>
                    <div className='productDisplay-right-prices-new' >${product.new_price}</div>
                </div>

                <div className="description">
                    A Lightweight, usually knitted, pollover shirt,close fitting and with a round necklines and short sleeves, warm as an underShirt or outer gramnet

                </div>
                <div className="size">
                    <h1>Select Size</h1>
                    <div className="right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>

                    </div>
                </div>
                <button className='btn'>Add TO CART</button>
                <p className='pd-right-category'><span>Caregory :</span> Women, T-Shirt, Crop Top</p>
                <p className='pd-right-category'><span>Tags :</span>Modern, Latest</p>


            </div>

        </div>
    );
};

export default ProductDisplay;