import React from 'react';
import './CSS/LoginSignUp.css'

const LoginSignUp = () => {
    return (
        <div className='loginsignup'>
            <div className='loginsignup-container'>
                <center>Sign Up</center>
                <div className='loginsignup-fields'>
                    <input type="text" placeholder='Your name' />
                    <input type="email" placeholder='Email Address' />
                    <input type="password" placeholder='****' />
                </div>
                <button>Continue</button>
                <p className='loginsignup-login'>Already have an Account? <span>Login here</span></p>
                <div className='loginsignup-agree'>
                    <input type="checkbox" name='' id='' />
                    <p>By Conyinuing, i agree to the terms of use & Privacy Policy.</p>

                </div>


            </div>


        </div>
    );
};

export default LoginSignUp;