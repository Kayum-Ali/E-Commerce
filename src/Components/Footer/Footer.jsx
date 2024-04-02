import React from 'react';
import './Footer.css'
import footer_logo from '../Assetes/logo_big.png'
import instragram_icon from '../Assetes/instagram_icon.png'
import pinterest_icon from '../Assetes/pintester_icon.png'
import whatsup_icon from '../Assetes/whatsapp_icon.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src={footer_logo} alt="" />
                <p>SHOOPER</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offers</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icon-container">
                    <img src={instragram_icon} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={pinterest_icon} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={whatsup_icon} alt="" />
                </div>
            </div>

            <div className="footer-copy">
                <hr />
                <p>Copyright @ 2024 - All right Reserved.</p>

            </div>

        </div>
    );
};

export default Footer;