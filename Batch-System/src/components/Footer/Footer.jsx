import React from 'react'
import './Footer.css'
import Button from '../Button/Button'
const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="footer-content-top">
                    <div className="footer-list-item">
                        <div><img src="/logo.svg" alt="" /></div>
                        <div>
                            <span><img src="/email-icon.svg" alt="" /></span>
                            <span>help@frybix.com</span>
                        </div>
                        <div>
                            <span><img src="/call-icon.svg" alt="" /></span>
                            <span>+1 234 456 678 89</span>
                        </div>
                    </div>
                    <div className="footer-list-item">
                        <h2>Links</h2>
                        <span>Home</span>
                        <span>About Us</span>
                        <span>Bookings</span>
                        <span>Blogs</span>
                    </div>
                    <div className="footer-list-item">
                        <h2>Legal</h2>
                        <span>Terms of Use</span>
                        <span>Privacy Policy</span>
                        <span>Cookie policy</span>
                    </div>
                    <div className="footer-list-item">
                        <h2>Product</h2>
                        <span>Take Tour</span>
                        <span>Live Chat</span>
                        <span>Reviews</span>
                    </div>
                    <div className="footer-list-item">
                        <h2>Newsletter</h2>
                        <span>Stay Up to Date</span>
                        <span className='subscribe-btn'>
                            <input type="text" placeholder='Your email' />
                            <Button text="Subscribe"/>
                        </span>
                    </div>
                </div>
                <hr />
                <div className="footer-content-bottom">Copyright 2022 uifry.com all rights reserved</div>
            </div>
        </>
    )
}

export default Footer;