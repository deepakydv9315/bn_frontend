import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import profile from "../../Assets/Images/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faLongArrowAltRight,
  faListAlt,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedoutUser } from "../../Redux/slices/user";
import Swal from "sweetalert2";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateAvatar } from "../../Redux/slices/user";

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [sidebar, setSidebar] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(
    user.avatar && user.avatar.url !== "DEmo img" ? user.avatar.url : profile
  );
  const navigate = useNavigate();
  const showSidebar = () => setSidebar(!sidebar);

  // for profile photo
  const handlePhotoChange = async (event) => {
    event.preventDefault();
    try {
      const file = event.target.files[0];
      const reader = new FileReader();

      // Create a new promise that resolves when the reader has finished loading
      const fileLoaded = new Promise((resolve, reject) => {
        reader.onload = function (e) {
          setProfilePhoto(e.target.result);
          resolve(e.target.result);
        };
        reader.onerror = function (e) {
          reject(new Error("Failed to load file"));
        };
      });

      reader.readAsDataURL(file);

      // Wait for the file to finish loading before dispatching the action
      const loadedProfilePhoto = await fileLoaded;
      await dispatch(updateAvatar({ avtar: loadedProfilePhoto }));
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlLogout = () => {
    dispatch(getLoggedoutUser());
    Swal.fire({
      icon: "success",
      width: "300px",
      title: "Logged Out Successfully",
      timer: 1500,
      timerProgressBar: true,
      confirmButtonColor: "#5cb85c",
      background: "#fff",
      showConfirmButton: false,
    });
    navigate("/");
  };

  return (
    <>
      <div className="user-sidebar">
        <div className="userImg">
          <label htmlFor="imgLabel" className="inputLabel">
            <img className="inputLabel" src={profilePhoto} alt="labelImg" />
          </label>
          <input
            id="imgLabel"
            className="inputImg"
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
          />
        </div>
        <ul>
          <Link to="/user" style={{ color: "white" }}>
            <li
              className={`option ${
                location.pathname === "/user" ? "active" : ""
              }`}
            >
              <span>
                {" "}
                <FontAwesomeIcon icon={faUser} />{" "}
              </span>
              Profile
            </li>
          </Link>

          <Link to="/user/password" style={{ color: "white" }}>
            <li
              className={`option ${
                location.pathname === "/user/password" ? "active" : ""
              }`}
            >
              <span>
                <FontAwesomeIcon icon={faListAlt} />
              </span>
              Passwords
            </li>
          </Link>

          <Link to="/user/address" style={{ color: "white" }}>
            <li
              className={`option ${
                location.pathname === "/user/address" ? "active" : ""
              }`}
            >
              <span>
                <FontAwesomeIcon icon={faAddressBook} />
              </span>
              Address Book
            </li>
          </Link>

          <Link to="/user/orders" style={{ color: "white" }}>
            <li
              className={`option ${
                location.pathname === "/user/orders" ? "active" : ""
              }`}
            >
              <span>
                <FontAwesomeIcon icon={faShoppingCart} />
              </span>
              My Orders
            </li>
          </Link>

          <div onClick={handlLogout} style={{ color: "white" }}>
            <li className="option">
              <span>
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </span>
              Logout
            </li>
          </div>
        </ul>
      </div>

      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <div className="userImg">
              <label htmlFor="imgLabel" className="inputLabel">
                <img className="inputLabel" src={profilePhoto} alt="labelImg" />
              </label>
              <input
                id="imgLabel"
                className="inputImg"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
              />
            </div>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <div
              onClick={handlLogout}
              style={{ color: "white", marginLeft: "20px", fontSize: "18px" }}
              className="nav-text"
            >
              <li className="option">
                <span>
                  <FontAwesomeIcon icon={faLongArrowAltRight} />
                </span>
                Logout
              </li>
              <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
