import React from 'react';

const PostCard = (props) => {

    const {item:{title, data, text}} = props;


    return (
        <div>

            <div className="posts__box--post">
                <h3 className="posts__box--post-title">{title}</h3>
                <p className="posts__box--post-data">{data}</p>
                <p className="posts__box--post-text">{text}</p>
            </div>

        </div>
    );
};

export default PostCard;