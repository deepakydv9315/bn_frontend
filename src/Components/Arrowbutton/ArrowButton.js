// Create a new component ArrowButton.js
import React from 'react';
import './ArrowButton.scss';

const ArrowButton = ({ type, onClick }) => {
  return (
    <button className={`arrow-button ${type}`} onClick={onClick}>
         {/* <span className="arrow-icon">➜</span> : <span className="arrow-icon">➜</span> */}
      {type === 'next' ? <span>&#8594;</span> : <span>&#8592;</span>}
    </button>
  );
};

export default ArrowButton;
