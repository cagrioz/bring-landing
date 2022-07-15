import React, { useContext } from 'react';
import { BiToggleLeft, BiToggleRight } from 'react-icons/bi';

import './Navbar.scss';

import HeaderContext from '../../context/HeaderContext';

function Navbar() {
    const {
        navList,
        activeSection: [activeSection, setActiveSection],
        theme: [theme, setTheme],
    } = useContext(HeaderContext);

    const toggleTheme = (e) => {
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
            </ul>
            <div className="theme-toggle" onClick={(e) => toggleTheme(e)}>
                {theme === 'light' ? <BiToggleLeft /> : <BiToggleRight />}
            </div>
        </nav>
    );
}

export default Navbar;
