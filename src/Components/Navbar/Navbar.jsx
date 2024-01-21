import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import Logo from "../../Assets/Images/Logo.png";
import "./Navbar.scss";
import { BsFacebook, BsInstagram, BsYoutube, BsLinkedin, BsTwitter } from "react-icons/bs";
import Cart from "../Cart/Cart";
import { setCartOpen } from "../../Redux/slices/appConfigSlice";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const { carts } = useSelector((state) => state.products);
  const { isAuthenticated, isAdmin } = useSelector((state) => state.user);
  const { isCartOpen } = useSelector((state) => state.app);
  const navigate = useNavigate();

  const openCartDialog = () => {
    dispatch(setCartOpen(true));
  };

  function open() {
    if (isAuthenticated && isAdmin) {
      navigate("/admin");
    } else if (isAuthenticated && !isAdmin) {
      navigate("/user");
    } else {
      navigate("/login");
    }
  }

  const handleNavigation = () => {
    navigate("/");
  };
  const handleResponse = () => {
    setToggle(false);
  };

  return (
    <div className="wrapper__nav ">
      <div className="top__nav nav-contain bn-sec">
        <p className="header-sale">
          Use <b>"BURLYNEW"</b> for extra 5% off
        </p>
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
      <nav className="navbar-items nav-contain">
        <div className="container nav__container">
          <div className="logo" onClick={handleNavigation}>
            <img src={Logo} alt="Logo" />
          </div>
          <ul className="app__navbar-links">
            <Link to="/">HOME</Link>
            <Link to="/products">PRODUCTS</Link>
            <Link to="/combo">COMBO</Link>
            <Link to="/blog">BLOGS</Link>
            <Link to="/about">ABOUT US</Link>
            <Link to="/contact">CONTACT US</Link>
          </ul>
          <div className="right">
            {/* <AiOutlineSearch /> */}
            <AiOutlineUser onClick={open} />
            <AiOutlineShoppingCart onClick={openCartDialog} />
          </div>
        </div>

        <div className="responsive__menu">
          {/* <AiOutlineSearch size={25} style={{ marginRight: "10px" }} /> */}
          <AiOutlineShoppingCart
            size={25}
            style={{ marginRight: "10px" }}
            onClick={openCartDialog}
          />
          <AiOutlineUser
            size={25}
            style={{ marginRight: "35px" }}
            onClick={open}
          />

          <div className="app__navbar-menu">
            <HiMenuAlt4 onClick={() => setToggle(true)} />
            {toggle && (
              <motion.div
                whileInView={{ x: [200, 0] }}
                transition={{ duration: 0.85, ease: "easeOut" }}
              >
                <HiX onClick={() => setToggle(false)} />
                <ul className="mobile">
                  <Link to="/" onClick={handleResponse}>
                    HOME
                  </Link>
                  <Link to="/products" onClick={handleResponse}>
                    PRODUCTS
                  </Link>
                  <Link to="/combo" onClick={handleResponse}>
                    COMBO
                  </Link>
                  <Link to="/about" onClick={handleResponse}>
                    ABOUT US
                  </Link>
                  <Link to="/contact" onClick={handleResponse}>
                    CONTACT
                  </Link>
                  <Link to="/blog" onClick={handleResponse}>
                    Blogs
                  </Link>
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </nav>
      {isCartOpen && <Cart carts={carts} />}
    </div>
  );
};
export default Navbar;
