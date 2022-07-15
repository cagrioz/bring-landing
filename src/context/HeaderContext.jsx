import { createContext, useState } from 'react';

const HeaderContext = createContext();
const navList = ['Home', 'About us', 'Services', 'Contact'];

export function HeaderProvider({ children }) {
    const [activeSection, setActiveSection] = useState('home');
    const [theme, setTheme] = useState('light');

    return (
        <HeaderContext.Provider
            value={{ navList, activeSection: [activeSection, setActiveSection], theme: [theme, setTheme] }}
        >
            {children}
        </HeaderContext.Provider>
    );
}

export default HeaderContext;
