import React, { useState } from 'react';
import './Navbar.css';
import Button from '../Button/Button';
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [clicked, setClicked] = useState('Home');
    const [show, setShow] = useState(false);
    const menuItems = ['Home', 'About Us', 'Pricing', 'Features'];

    return (
        <nav className="navbar-container">
            <div className="navbar-logo">
                <img src="./logo.svg" alt="Logo" />
            </div>
            <ul className={`navbar-lists ${show ? 'show' : ''}`}>
                {menuItems.map((item) => (
                    <li
                        key={item}
                        className={clicked === item ? 'active' : ''}
                        onClick={() => setClicked(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            <div className="nav-icon" onClick={() => setShow(!show)}>
                {!show ? <FaBars /> : <RxCross2 />}
            </div>
            <div className="navbar-download-button">
                <Button text="Download" />
            </div>
        </nav>
    );
}

export default Navbar;
