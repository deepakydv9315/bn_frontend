import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import bgImg from "../../Assets/Images/product.png";
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUser } from "../../Redux/slices/user";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigation = () => {
    navigate("/");
  };

  const onSubmit = (data) => {
    dispatch(createUser(data));
  };

  const handleSignUp = () => {
    const isUserRegistered = false;
    const isEmailInvalid = false;

    if (isUserRegistered) {
      toast.error('Email is already registered!', { position: 'top-right' });
    } else if (isEmailInvalid) {
      toast.error('Invalid email address!', { position: 'top-right' });
    } else {
      toast.success('🦄 Registration successful!', { position: 'top-right' });
    }
  };

  return (
    <section className="si">
      <div className="register">
        <div className="col-1">
          <div className="close-icon" onClick={handleNavigation}>
            <FaTimes />
          </div>
          <h2>Sign Up</h2>

          <span>Register</span>
          <br></br>
          <br></br>
          <button className="signup-with-mail-btn">
            <BsGoogle />
            {"\u00a0\u00a0\u00a0"}Sign Up with Google
          </button>

          <div className="or-line">or</div>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              {...register("email", { required: true })}
              placeholder="email"
            />
            <input
              type="text"
              {...register("username")}
              placeholder="username"
            />
            <input
              type="password"
              {...register("password")}
              placeholder="password"
            />
            <input
              type="password"
              {...register("confirmpwd")}
              placeholder="confirm password"
            />
            {errors.email?.type === "required" && "Email is required"}
            <div>
              <button className="btn" onClick={handleSignUp}>Sign Up</button>
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
            <div className="old-customer">
              Old customer?
              <Link to="/login">
                <p>LogIn to your existing account</p>
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
