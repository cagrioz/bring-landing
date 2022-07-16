import React from 'react';
import ServicesFindVector from '../../assets/svg/ServicesFindVector';
import ServicesPaymentVector from '../../assets/svg/ServicesPaymentVector';
import ServicesProductVector from '../../assets/svg/ServicesProductVector';

import './Services.scss';

function Services() {
    return (
        <section className="services">
            <h2 className="services__title">Some services We Offer</h2>
            <div className="container flex flex-3">
                <div className="service__item">
                    <h4>Payment Done</h4>
                    <ServicesPaymentVector />
                    <p>Pay with a Visa or PayPal card and without much ado.</p>
                    <span>Learn More</span>
                </div>
                <div className="service__item">
                    <h4>Find Your Product</h4>
                    <ServicesFindVector />
                    <p>We offer sale of products through the Internet.</p>
                    <span>Learn More</span>
                </div>
                <div className="service__item">
                    <h4>Product Received</h4>
                    <ServicesProductVector />
                    <p>In our app you can see the delay time of your order.</p>
                    <span>Learn More</span>
                </div>
            </div>
        </section>
    );
}

export default Services;
