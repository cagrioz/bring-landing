import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import { HeaderProvider } from './context/HeaderContext';

function App() {
    return (
        <div className="App">
            <HeaderProvider>
                <Header />
            </HeaderProvider>

            <Hero />
        </div>
    );
}

export default App;
