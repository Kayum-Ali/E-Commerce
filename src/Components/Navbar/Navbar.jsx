import React from 'react';
import './Navbar.css'
import logo from '../Assetes/logo.png'
import cart_icon from '../Assetes/cart_icon.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>Shopper</p>

            </div>

        </div>
    );
};

export default Navbar;