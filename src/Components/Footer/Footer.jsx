import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bn-sec">
      <div className="footer-top">
        <h4>Quick Links</h4>
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
        <div className="copyright">Burly Nutrition &copy; 2023
          <span> | </span>
          <span><Link to="/terms">T&C</Link></span>
          <span> | </span>
          <span><Link to="/privacy">Privacy Policy</Link></span>
        </div>
        <div className="develop">Designed & Developed by &nbsp;
          <span>Analy Assist</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
