import React from 'react';
import './App.scss';
import AboutVector from './assets/svg/AboutVector';
import SecurityVector from './assets/svg/SecurityVector';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import { HeaderProvider } from './context/HeaderContext';

function App() {
    return (
        <div className="App">
            <HeaderProvider>
                <Header />
            </HeaderProvider>

            <Hero />

            <Card
                img={<AboutVector />}
                title="Find Out A Little More About Us"
                description="We are a company dedicated to the distribution of products by delivery to your home or to the place where you are, with the best quality of delivery."
                reversed
            />

            <Card
                img={<SecurityVector />}
                title="Your Safety Is Important"
                description="When your order reaches you, we have the health safety protocols, so that you are protected from any disease. Watch the video of how the delivery is made."
            />

            <Services />
        </div>
    );
}

export default App;
