import React, { useState } from 'react';
import 'boxicons';

function Navbar() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Contact</li>
                <box-icon name="toggle-left" onClick={toggleTheme}></box-icon>
            </ul>
        </nav>
    );
}

export default Navbar;
