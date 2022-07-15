import React, { useContext } from 'react';
import 'boxicons';

import './Navbar.scss';

import HeaderContext from '../../context/HeaderContext';

function Navbar() {
    const {
        navList,
        activeSection: [activeSection, setActiveSection],
        theme: [theme, setTheme],
    } = useContext(HeaderContext);

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return (
        <nav className="header-nav">
            <ul>
                {navList.map((el) => (
                    <li
                        key={el}
                        onClick={(e) => setActiveSection(el.toLowerCase())}
                        className={el.toLowerCase() === activeSection ? 'active' : ''}
                    >
                        {' '}
                        {el}
                    </li>
                ))}
                <box-icon className="theme-toggle" name="toggle-left" onClick={toggleTheme}></box-icon>
            </ul>
        </nav>
    );
}

export default Navbar;
