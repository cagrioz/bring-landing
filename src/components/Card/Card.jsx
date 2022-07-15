import React from 'react';

import './Card.scss';

function Card({ img, title, description, reversed }) {
    return (
        <section className="card">
            <div className={`container flex ${reversed && 'reverse'}`}>
                <div>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                {img}
            </div>
        </section>
    );
}

export default Card;
