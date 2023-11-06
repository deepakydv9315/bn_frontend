// import React, { useState, useEffect } from 'react';
// import './Login.scss';
// import { Link } from "react-router-dom";
// import { BsGoogle, BsX } from "react-icons/bs";
// import Swal from "sweetalert2";
// import {
//   // createUser,
//   getLoggedInrUser,
//   // loginGoogleUser,
//   clearError,
// } from "../../Redux/slices/user";
// import { useNavigate } from "react-router-dom";
// // import Loader from "../../Components/Loader/Loader";
// import { useDispatch, useSelector } from 'react-redux';

// const LoginDialog = () => {

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const [confirmpassword, setConfirmpassword] = useState("");

//   const { status, isAuthenticated, error } = useSelector((state) => state.user);
//   // const { isLoading } = useSelector((state) => state.app);

//   //Login Handler:
//   const handleSignIn = (e) => {
//     e.preventDefault();
//     dispatch(getLoggedInrUser({
//       email,
//       password,
//     }));
//   };

//   useEffect(() => {
//     if (status) {
//       Swal.fire({
//         timer: 1400,
//         title: "Registered"
//       })

//       setEmail("");
//       setPassword("");
//       setUserName("");
//       dispatch(clearError());
//     }

//     if (isAuthenticated) {
//       Swal.fire({
//         timer: 1000,
//         title: "Logged In",
//         // icon: "success",
//         showConfirmButton: false,
//         position: "bottom-end",
//         customClass: {
//           popup: "custom-popup",
//           closeButton: "custom-close-button",
//           title: "s-title",
//         },
//         allowOutsideClick: false,
//         allowEscapeKey: false,
//         allowEnterKey: false,
//         showCloseButton: true,
//         closeButtonHtml: "&times;",
//       });

//       setEmail("");
//       setPassword("");
//       setUserName("");
//       navigate("/");
//       dispatch(clearError());
//     }

//     if (error) {
//       Swal.fire({
//         timer: 1500,
//         title: error,
//         icon: "error",
//       });
//       dispatch(clearError());
//     }

//   }, [status, isAuthenticated, error]);

//   const [showCreateAccount, setShowCreateAccount] = useState(false);
//   const [isDialogVisible, setIsDialogVisible] = useState(true);

//   const handleCreateAccountToggle = () => {
//     setShowCreateAccount(!showCreateAccount);
//   };

//   const handleClose = () => {
//     setIsDialogVisible(false);
//   };

//   return (
//     isDialogVisible && (
//       <div className="login-dialog">
//         <div className="overlay">
//           <Link to={`/`}>
//             <button className="close-btn" onClick={handleClose}>
//               <BsX />
//             </button>
//           </Link>
//           <div className="sec-head login-header">
//             <form className="sign-in-form">
//               <h2>LOGIN</h2>
//               <button className="login-with-mail-btn"><BsGoogle />{'\u00a0\u00a0\u00a0'}Sign In with Google</button>
//               <div className="or-line">or</div>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 onChange={(e) => setPassword(e.target.value)}
//               />

//               <Link to="/forgetPassword">
//                 <p className="forgotten">Forgotton password ?</p>
//               </Link>

//               <button
//                 type="submit"
//                 className="signin-btn"
//                 onClick={handleSignIn}>
//                 Sign In
//               </button>
//             </form>
//             <div className="policy">
//               By continuing, I agree to Elini Privacy Policy and Terms of use
//             </div>
//             <div className="new-customer" onClick={handleCreateAccountToggle}>
//               <Link to="/signup"><p>New customer? Create an account</p>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div >
//     )
//   );
// };

// export default LoginDialog;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import bgImg from "../../Assets/Images/product.png";
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { getLoggedInrUser } from "../../Redux/slices/user";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigation = () => {
    navigate("/");
  };

  const onSubmit = (data) => {
    console.log(data);
    dispatch(getLoggedInrUser(data));
  };

  return (
    <section className="si">
      <div className="register">
        <div className="col-1">
          <div className="close-icon" onClick={handleNavigation}>
            <FaTimes />
          </div>
          <h2>Log In</h2>
          <span>Log in to your account</span>
          <br></br>
          <br></br>
          <button className="signup-with-mail-btn">
            <BsGoogle />
            {"\u00a0\u00a0\u00a0"}Log In with Google
          </button>

          <div className="or-line">or</div>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input type="text" {...register("email")} placeholder="E-Mail" />
            <input
              type="password"
              {...register("password")}
              placeholder="password"
            />
            <div className="forgotten">
              <Link to="/forgot">
                <p>Forgot your password?</p>
              </Link>
            </div>
            <button className="btn">Log In</button>

            <div className="policy">
              By continuing, I agree to Elini Privacy Policy and Terms of use
            </div>
            <div className="new-customer">
              <Link to="/signup">
                <p>New customer? Sign up for an account</p>
              </Link>
            </div>
          </form>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
}
