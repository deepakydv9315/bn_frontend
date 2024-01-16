import "./Footer.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Master from "../../Assets/svgs/master.svg";
import AmericanExpress from "../../Assets/svgs/american_express.svg";
import DinersClub from "../../Assets/svgs/diners_club.svg";
import Maestro from "../../Assets/svgs/maestro.svg";
import Visa from "../../Assets/svgs/visa.svg";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

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
      <div className="bn-sec top">
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
              <Link to="/about">Contact Us</Link>
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
          <h4>100% Safe & Secure payments:</h4>
          <div className="payment-cards">
            <img src={Master} alt="Master" />
            <img src={AmericanExpress} alt="American Express" />
            <img src={DinersClub} alt="Donirs CLub" />
            <img src={Maestro} alt="MaestroCard" />
            <img src={Visa} alt="Visa" />
          </div>
          <br></br>
          <h4>Quick Links</h4>
          <div className="social__icon">
            <a
              href="https://www.facebook.com/burlynutrition.in"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook />
            </a>

            <a
              href="https://www.instagram.com/burlynutrition_"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram />
            </a>

            <a
              href="https://www.youtube.com/@BurlyNutrition"
              target="_blank"
              rel="noreferrer"
            >
              <BsYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="copyright">Burly Nutrition &copy; 2024</div>
        <div className="develop">
          Designed & Developed by &nbsp;
          <span>
            <a
              href="https://www.instagram.com/analyassist/"
              target="_blank"
              rel="noreferrer"
            >
              Analy Assist{" "}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
