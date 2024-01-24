import "./Footer.scss";
import { Link } from "react-router-dom";
import Master from "../../Assets/svgs/master.svg";
import AmericanExpress from "../../Assets/svgs/american_express.svg";
import DinersClub from "../../Assets/svgs/diners_club.svg";
import Maestro from "../../Assets/svgs/maestro.svg";
import Visa from "../../Assets/svgs/visa.svg";
import { BsFacebook, BsInstagram, BsYoutube, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {


  return (
    <footer className="bn-sec">
      <div className="top f-top">
        {/* follow and payments  */}
        <div className="ft-link-sec ft-contact">
          {/* <div className="link-sec-head">
            Contact us
          </div> */}
          <div className="link-sec-link">
            <div className="ft-text">
              Follow us on:
            </div>
            <div className="ft-social">

              {/* facebook  */}
              <a
                href="https://www.facebook.com/burlynutrition.in"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook />
              </a>

              {/* instagram  */}
              <a
                href="https://www.instagram.com/burlynutrition_"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram />
              </a>

              {/* youtube  */}
              <a
                href="https://www.youtube.com/@BurlyNutrition"
                target="_blank"
                rel="noreferrer"
              >
                <BsYoutube />
              </a>

              {/* linkedin */}
              <a
                href="https://www.youtube.com/@BurlyNutrition"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>

              {/* twiter */}
              <a
                href="https://www.youtube.com/@BurlyNutrition"
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitter />
              </a>
            </div>
          </div>
          <div className="link-sec-link">
            <div className="ft-text">
              100% Safe & Secure Payments:
            </div>
            <div className="payment-cards">
              <img src={Master} alt="Master" />
              <img src={AmericanExpress} alt="American Express" />
              <img src={DinersClub} alt="Donirs CLub" />
              <img src={Maestro} alt="MaestroCard" />
              <img src={Visa} alt="Visa" />
            </div>
          </div>
        </div>
        {/* quick links  */}
        <div className="ft-link-sec">
          <div className="link-sec-head">
            Quick Links
          </div>
          <div className="link-sec-link">
            <span><Link to="/about">Contact Us</Link></span>
            <span><Link to="/about">About Us</Link></span>
            <span><Link to="/about">Our Blogs</Link></span>
            <span><Link to="/about">Lab Reports</Link></span>
            <span><Link to="/about">Terms of Service</Link></span>
            <span><Link to="/about">Why Burly Nutrition</Link></span>
            <span><Link to="/about">Refund & Return Policy</Link></span>
          </div>
        </div>
        {/* products  */}
        <div className="ft-link-sec">
          <div className="link-sec-head">
            Products
          </div>
          <div className="link-sec-link">
            <span><Link to="/about">Whey Protein</Link></span>
            <span><Link to="/about">Burly Creatine</Link></span>
            <span><Link to="/about">Duffle Bags</Link></span>
            <span><Link to="/about">Shakers</Link></span>
            <span><Link to="/about">Our Combos</Link></span>
            <span><Link to="/about">Our Bestsellers</Link></span>
          </div>
        </div>
        {/* contact us  */}
        <div className="ft-link-sec ft-contact">
          <div className="link-sec-head">
            Contact us
          </div>
          <div className="link-sec-link">
            <span className="sec-link-head">
              <div>
                <span className="ft-l-head">Call us at:</span>
                <span className="ft-l-text">(11:00 AM - 6:00 PM)</span>
              </div>
              <div className="ft-l-content">+91 9540378443</div>
            </span>

            <span className="sec-link-head">
              <div>
                <span className="ft-l-head">Mail us at:</span>
              </div>
              <div className="ft-l-content">burlynutrition@gmail.com | support@burlynutrition.com</div>
            </span>

            <span className="sec-link-head">
              <div>
                <span className="ft-l-head">WhatsApp Messaging:</span>
              </div>
              <div className="ft-l-content">Mon to Fri (9:30 AM - 6:30 PM)
                <br />
                Please note: No calls will be entertained on WhatsApp</div>
            </span>
          </div>
        </div>

      </div>


      <div className="f-btm">
        <div className="f-btm-top">
          All Burly Nutrition products are manufactured at FSSAI approved manufacturing facilities and are not intended to diagnose, treat, cure, or prevent any Disease
        </div>
        <div className="f-btm-btm">
          <div className="copyright">
            <span>
              Burly Nutrition&copy; 2024
            </span>
            <span> | </span>
            <span className="ft-link">
              <Link to="/about"> T&C</Link>

              <span> | </span>
              <Link to="/about">Privacy Policy</Link>
            </span>
          </div>
          <div className="develop">
            Designed & Developed by &nbsp;
            <span className="ft-link">
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
      </div>
    </footer>
  );
};

export default Footer;
