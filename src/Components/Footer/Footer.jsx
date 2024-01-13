import "./Footer.scss";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bn-sec">
      <div className="footer-top">
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
        <div className="footer-link-wrapper">
          <span>
            <Link to="/products">Shop</Link>
          </span>
          <span>
            <Link to="/blog">Blogs</Link>
          </span>
          <span>
            <Link to="/about">About Us</Link>
          </span>
          <span>
            <Link to="/contact">Contact Us</Link>
          </span>
          {/* <span>
            <Link to="/blog">Blog</Link>
          </span> */}
          <span>
            <Link to="/shipping">Shipping Policy</Link>
          </span>
          <span>
            <Link to="/refund">Return & Refund Policy</Link>
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">Burly Nutrition &copy; 2024
          <span> | </span>
          <span><Link to="/terms">T&C</Link></span>
          <span> | </span>
          <span><Link to="/privacy">Privacy Policy</Link></span>
        </div>
        <div className="develop">Designed & Developed by &nbsp;
          <span>
            <a
            href="https://www.instagram.com/analyassist/"
            target="_blank"
            rel="noreferrer"
          >
            Analy Assist </a>
            </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
