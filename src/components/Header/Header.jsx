import React from 'react';
import './Header.scss';

import Navbar from '../Navbar/Navbar';

function Header() {
    return (
        <header className="main-header">
            {/* Left - Logo */}
            <div>
                <h2>Bring</h2>
            </div>
            {/* Middle - Navbar */}
            <div>
                <Navbar />
            </div>
            {/* Right - CTA */}
            <div>
                <button>Order Now!</button>
            </div>
        </header>
    );
}

export default Header;
