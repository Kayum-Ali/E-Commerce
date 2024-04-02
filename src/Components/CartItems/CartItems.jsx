import React, { useContext } from 'react';
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assetes/cart_cross_icon.png'

const CartItems = () => {
    const { all_product, getTotalCartAmount, cartItem, removeFormCart } = useContext(ShopContext)
    return (
        <div className='cartitems'>
            <div className="cartItem-Format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {
                all_product.map((e) => {
                    if (cartItem[e.id] > 0) {
                        return <div>
                            <div className="cartItem-format cartItem-Format-main">
                                <img src={e.image} className='cart-icon' alt="" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitem-quantity'>{cartItem[e.id]}</button>
                                <p>${e.new_price * cartItem[e.id]}</p>
                                <img src={remove_icon} className='remove-icon' onClick={() => { removeFormCart(e.id) }} alt="" />

                            </div>
                        </div>
                    }
                    return null
                })
            }

            <div className='cartitem-down'>
                <div className="cartitem-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className='cartitem-total-item'>
                            <p>SunTotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cartitem-total-item'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitem-total-item'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>

                    <button>PROCCED TO CHECKOUT</button>
                </div>

                <div className="cartitems-promocode">
                    <p>if you have a promo code, Enter it hare </p>
                    <div className="cartitems-promoBox">
                        <input type="text" placeholder='Promo Code' />
                        <button>Submit</button>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default CartItems;