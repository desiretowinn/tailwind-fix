import React from 'react';
import "./index.scss"
import Card from '../././../UI/Card/Card'
import FuturedCard from '../../UI/Card/FuturedCard';
import PostCard from '../../UI/Card/PostCard';
import { heroCard } from '../../constants/CardsInfo';
import { postCard } from '../../constants/CardsInfo';
import { futuredCard } from '../../constants/CardsInfo';

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