import React from 'react';
import NotFoundImage from '../../Assets/Images/error.png';
import './ErrorPage.scss';
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="not-found-container contain contain-bg">
      <img src={NotFoundImage} alt="404 Error" className="not-found-image" />
      <h1 className="not-found-heading">Opps!!! Page Not Found</h1>
      <p className="not-found-description">
        We couldn't find the page you were looking for.
      </p>
      <div className="not-found-buttons">
        <Link to="/" className="btn1">
          <button className="go-home-button">Go Home</button>
        </Link>
        <Link to="/contact" className="btn1">
          <button className="contact-us-button">Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
