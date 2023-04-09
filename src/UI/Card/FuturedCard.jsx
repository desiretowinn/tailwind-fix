import React from 'react';

const FuturedCard = (props) => {

    const {item:{title, year, data, img, text}} = props;


    return (
        <div>
            



            <div className="futured__cards--card">
                                    <img className="futured__cards--card-img" src={img} alt="{title}" />
                                    <div className="futured__cards--card-info">
                                        <h3 className="futured__cards--card-info-title">{title}</h3>
                                        <div className="futured__cards--card-info-data">
                                            <h4 className="futured__cards--card-info-data-year">{year}</h4>
                                            <p className="futured__cards--card-info-data-text">{data}</p>
                                        </div>
                                        <p className="futured__cards--card-info-text">{text}</p>
                                    </div>
                                </div>

                                <span className="line"></span>

        </div>
    );
};

export default FuturedCard;