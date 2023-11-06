import "./Footer.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Master from "../../Assets/svgs/master.svg";
import AmericanExpress from "../../Assets/svgs/american_express.svg";
import DinersClub from "../../Assets/svgs/diners_club.svg";
import Maestro from "../../Assets/svgs/maestro.svg";
import Visa from "../../Assets/svgs/visa.svg";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <footer>
      <div className="top">
        <div className="pages">
          <ul>
            <h3>EXPLORE</h3>
            <li>
              <Link to="/about">Track Order</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/about">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/about">Frequently Asked Questions on Whey</Link>
            </li>
            <li>
              <Link to="/about">Terms of Service</Link>
            </li>
            <li>
              <Link to="/about">Return & Refund Policy</Link>
            </li>
          </ul>
        </div>
        <div className="newsletter">
          <h3>SUBSCRIBE TO THE NEWSLETTER</h3>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter Email Address"
              required
            />
            <button type="submit">Join</button>
          </form>
        </div>
      </div>
      <div className="bottom">
        <div className="payment-cards">
          <img src={Master} alt="Master" />
          <img src={AmericanExpress} alt="American Express" />
          <img src={DinersClub} alt="Donirs CLub" />
          <img src={Maestro} alt="MaestroCard" />
          <img src={Visa} alt="Visa" />
        </div>
        <div className="copyright">COPYRIGHT &copy; 2023</div>
      </div>
    </footer>
  );
};

export default Footer;
