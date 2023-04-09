import React from 'react';

const Card = (props) => {

    const {item:{title, description, btn, img}} = props;

    return (
        <div className='hero'>
            
            <div className="hero__box">

                <h1 className="hero__box--heading">{title}</h1>
                <p className="hero__box--text">{description}</p>
                <button className="hero__box--btn">{btn}</button>

            </div>

            <img className="hero__img" src={img} alt="customer"></img>


        </div>
    );
};

export default Card;