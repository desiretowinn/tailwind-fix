import React from 'react';
import "./index.scss"
import Card from '../././../UI/Card/Card'

import img1 from "../../assets/images/avatar.png"
import img2 from "../../assets/images/card-imh.png"
import PostCard from '../../UI/Card/PostCard';
import FuturedCard from '../../UI/Card/FuturedCard';

const Main = () => {


    function card(props) {}

    const heroCard = [
        {
            "title": "Hi, I am John, Creative Technologist",
            "description": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            "btn": "Download Resume",
            "img": img1,
        }
    ]

    function post(props){}

    const postCard = [
        {
            "title": "Making a design system from scratch",
            "data": "12 Feb 2020     |      Design, Pattern",
            "text": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            "title": "Creating pixel perfect icons in Figma",
            "data": "12 Feb 2020     |      Figma, Icon Design",
            "text": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        }
    ]

    function futured(props){}

    const futuredCard = [
        {
            "title": "Designing Dashboards",
            "year": "2020",
            "img": img2,
            "data": "Dashboard",
            "text": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            "title": "Vibrant Portraits of 2020",
            "year": "2018",
            "img": img2,
            "data": "Illustration",
            "text": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },        {
            "title": "36 Days of Malayalam type",
            "year": "2018",
            "img": img2,
            "data": "Typography",
            "text": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
    ]

    return (
        <>
            {/* ----- main start ----- */}

            <main>

                {/* ----- hero start ----- */}

                <div className="section-hero">
                    <div className="container">
                        {
                            heroCard.map((item) => {
                                return <Card item={item} />
                            })
                        }
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

                            {
                            postCard.map((item) => {
                                return <PostCard item={item} />
                            })
                        }

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
                                {
                                    futuredCard.map((item) => {
                                        return <FuturedCard item={item}/>
                                    })
                                }

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