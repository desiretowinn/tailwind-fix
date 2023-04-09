import React from 'react';
import "./index.scss"

import img1 from "../../assets/images/avatar.png"
import img2 from "../../assets/images/card-imh.png"

const Main = () => {
    return (
        <>
                        {/* ----- main start ----- */}

                        <main>

{/* ----- hero start ----- */}

<div className="section-hero">
    <div className="container">
        <div className="hero">

            <div className="hero__box">

                <h1 className="hero__box--heading">Hi, I am John, Creative Technologist</h1>
                <p className="hero__box--text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                    officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <button className="hero__box--btn">Download Resume</button>

            </div>

            <img className="hero__img" src={img1} alt="customer"></img>

        </div>
    </div>
</div>


{/* ----- hero end ----- */}



{/* ----- posts star ----- */}


<section className="section-posts">
    <div className="container">

        <div className="posts">

            <h2 className="posts__heading">Recent posts</h2>
            <a href="#" className="posts__link">View all</a>

            <div className="posts__box">

                <div className="posts__box--post">
                    <h3 className="posts__box--post-title">Making a design system from scratch</h3>
                    <p className="posts__box--post-data">12 Feb 2020     |      Design, Pattern</p>
                    <p className="posts__box--post-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>

                <div className="posts__box--post">
                    <h3 className="posts__box--post-title">Creating pixel perfect icons in Figma</h3>
                    <p className="posts__box--post-data">12 Feb 2020     |      Figma, Icon Design</p>
                    <p className="posts__box--post-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>

            </div>

        </div>

    </div>
</section>


{/* ----- posts star ----- */}



{/* ----- Futured start ----- */}


<section className="section-futured">
    <div className="container">

        <div className="futured">

            <h3 className="futured__title">Featured works</h3>

            <div className="futured__cards">

                <div className="futured__cards--card">
                    <img className="futured__cards--card-img" src={img2} alt="Avatar"/>
                    <div className="futured__cards--card-info">
                        <h3 className="futured__cards--card-info-title">Designing Dashboards</h3>
                        <div className="futured__cards--card-info-data">
                            <h4 className="futured__cards--card-info-data-year">2020</h4>
                            <p className="futured__cards--card-info-data-text">Dashboard</p>
                        </div>
                        <p className="futured__cards--card-info-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>

                <span className="line"></span>

                <div className="futured__cards--card">
                    <img className="futured__cards--card-img" src={img2} alt="Avatar"/>
                    <div className="futured__cards--card-info">
                        <h3 className="futured__cards--card-info-title">Vibrant Portraits of 2020</h3>
                        <div className="futured__cards--card-info-data">
                            <h4 className="futured__cards--card-info-data-year">2018</h4>
                            <p className="futured__cards--card-info-data-text">Illustration</p>
                        </div>
                        <p className="futured__cards--card-info-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>

                <span className="line"></span>

                <div className="futured__cards--card">
                    <img className="futured__cards--card-img" src={img2} alt="Avatar"/>
                    <div className="futured__cards--card-info">
                        <h3 className="futured__cards--card-info-title">36 Days of Malayalam type</h3>
                        <div className="futured__cards--card-info-data">
                            <h4 className="futured__cards--card-info-data-year">2018</h4>
                            <p className="futured__cards--card-info-data-text">Typography</p>
                        </div>
                        <p className="futured__cards--card-info-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>

                <span className="line"></span>


            </div>

        </div>

    </div>
</section>


{/* ----- Futured end ----- */}


</main>

{/* ----- main end ----- */}
        </>
    );
};

export default Main;