import React, { useState } from 'react';
import './navbar.css';
import logo from '/src/assets/logo.png';
import contactImg from '/src/assets/contact.png';
import menu from '/src/assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    // Dynamic smooth-scrolling handler that removes package requirements
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setShowMenu(false); // Closes mobile menu dropdown automatically
    };

    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo' onClick={() => handleScroll('intro')} style={{cursor: 'pointer'}} />
            
            {/* Desktop Menu Links */}
            <div className="desktopMenu">
                <span className="desktopMenuListItem" onClick={() => handleScroll('intro')}>Home</span>
                <span className="desktopMenuListItem" onClick={() => handleScroll('skills')}>About</span>
                <span className="desktopMenuListItem" onClick={() => handleScroll('works')}>Portfolio</span>
                
            </div> {/* <-- Fixed: Added this missing closing div tag */}

            {/* Desktop Action Button */}
            <button className="desktopMenuBtn" onClick={() => handleScroll('contactPage')}>
                <img src={contactImg} alt="Contact" className="desktopMenuImg" />Contact Me
            </button>
            
            {/* Mobile Navigation Toggle */}
            <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
            
            {/* Mobile Dropdown Panel */}
            <div className="navMenu" style={{display: showMenu ? 'flex' : 'none'}}>
                <span className="listItem" onClick={() => handleScroll('intro')}>Home</span>
                <span className="listItem" onClick={() => handleScroll('skills')}>About</span>
                <span className="listItem" onClick={() => handleScroll('works')}>Portfolio</span>
                <span className="listItem" onClick={() => handleScroll('contactPage')}>Contact</span>
            </div>
        </nav>
    );
};

export default Navbar;
