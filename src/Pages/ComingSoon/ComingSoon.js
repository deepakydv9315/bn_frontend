
import React from 'react';
import './ComingSoon.scss';

const ComingSoon = () => {
    return (
        <div className="body-coming-soon">
            <div className="coming-soon-container">
                <h1 className="adminhead">Exciting<span>Things Are</span> Coming!</h1>
                <br></br>
                <p className="description">
                    We are working hard to bring something amazing for you. Stay tuned!
                </p>
                <div className="loader"></div>
            </div>
        </div>
    );
};

export default ComingSoon;
