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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    dispatch(getLoggedInrUser(data));
  };

  const handleLogin = () => {
    const isIncorrectPassword = false;
    const isInvalidEmail = false;
    const isUserNotFound = false;

    if (isIncorrectPassword) {
      toast.error('Incorrect password!', { position: 'top-right' });
    } else if (isInvalidEmail) {
      toast.error('Invalid email address!', { position: 'top-right' });
    } else if (isUserNotFound) {
      toast.error('User not found. Please register!', { position: 'top-right' });
    } else {
      toast.success('🎉 Login successful!', { position: 'top-right' });
    }
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
            <BsGoogle />{"\u00a0\u00a0\u00a0"}Log In with Google
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

            <div>
              <button className="btn" onClick={handleLogin}>
                Log In
              </button>
              <ToastContainer
                position="top-right"
                autoClose={5000}
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

            <div className="policy">
              By continuing, you agree to Burly Nutrition's <b>Terms & Conditions</b> and <b>Privacy Policy</b>.
            </div>
            <div className="new-customer">
              New customer?
              <Link to="/signup">
                <p> Sign up for an account</p>
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
