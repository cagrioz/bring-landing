import React from 'react';

import HeroVector from '../../assets/svg/HeroVector';

import './Hero.scss';

function Hero() {
    return (
        <section className="hero">
            <div className="container flex">
                <div>
                    <h1>
                        Order Products <br />
                        Faster Easier
                    </h1>
                    <p>Order your favorite foods at any time and we will deliver them right to where you are.</p>
                    <button>Get Started</button>
                </div>
                <HeroVector />
            </div>
        </section>
    );
}

export default Hero;
