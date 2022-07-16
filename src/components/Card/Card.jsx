import React from 'react';

import './Card.scss';

function Card({ img, title, description, reversed }) {
    return (
        <section className="card">
            <div className={`container flex ${reversed && 'reverse'}`}>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div>{img}</div>
            </div>
        </section>
    );
}

export default Card;
