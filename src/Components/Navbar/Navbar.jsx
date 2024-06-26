import React, { useContext, useState } from 'react';
import './Navbar.css'
import logo from '../Assetes/logo.png'
import cart_icon from '../Assetes/cart_icon.png'
import { NavLink, Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState('shop')
    const { getTotalCartItem } = useContext(ShopContext)
    return (
        <div className='navbar'>
            <NavLink to='/' className='nav-logo'>
                <img src={logo} alt="" />
                <p>Shopper</p>

            </NavLink>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>  {menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>  {menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link> {menu === "womens" ? <hr /> : <></>}</li >
                <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <button> <Link style={{ textDecoration: 'none' }} to='/login'>Login</Link></button>
                <Link to='/cart'> <img src={cart_icon} alt="" /></Link>
                <div className='nav-cart-count'>{getTotalCartItem()}</div>


            </div>

        </div >
    );
};

export default Navbar;