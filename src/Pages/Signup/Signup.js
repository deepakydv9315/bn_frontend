import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import bgImg from "../../Assets/Images/product.png";
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUser } from "../../Redux/slices/user";
import { loginGoogleUser } from "../../Redux/slices/user";
import { clearError } from "../../Redux/slices/user";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Form() {
  const { isAuthenticated } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    mode: 'onChange', // Enable onChange mode for dynamic validation
    criteriaMode: 'all', // Validate all fields on change
    shouldFocusError: true,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const password = watch('password');

  const onSubmit = async (data) => {
    const signupRes = await dispatch(createUser(data));
    console.log("signup Response : ", signupRes);
    console.log(signupRes.payload);
    
    if (signupRes.payload.success) {
      toast.success("🦄 Registration successful!", { position: "top-right" });
      dispatch(clearError());
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      toast.error("Email is already registered!", { position: "top-right" });
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility1 = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validatePassword = (value) => {
    // Add your password validation logic here
    return value === password || 'Passwords do not match';
  };

  return (
    <section className="si">
      <div className="register">
        <div className="col-1">
          <div className="close-icon" onClick={() => navigate("/")}>
            <FaTimes />
          </div>
          <h2>Sign Up</h2>
          <span>Register</span>
          <br></br>
          <br></br>
          <button
            className="signup-with-mail-btn"
            onClick={() => dispatch(loginGoogleUser())}
          >
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
              style={{ backgroundColor: "transparent", color: 'black', padding: "12px" }}
              type="text"
              {...register("username")}
              placeholder="Name"
            />
            <input
              style={{ backgroundColor: "transparent", color: 'black', padding: "12px" }}
              type="text"
              {...register("email", { required: true })}
              placeholder="Email"
            />
            <div style={{ position: 'relative' }} className="flex flex-col">
              <input
                className="pass"
                style={{ backgroundColor: 'transparent', color: 'black' }}
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                placeholder="Password"
              />
              <span
                onClick={togglePasswordVisibility}
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '10px',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  border: "none"
                }}
              >
                {showPassword ? <FaEyeSlash style={{ paddingBottom: "4px", fontSize: "18px" }} /> : <FaEye style={{ paddingBottom: "4px", fontSize: "18px" }} />}
              </span>
            </div>
            <div style={{ position: 'relative' }} className="flex flex-col">
              <input
                className="pass"
                style={{ backgroundColor: 'transparent', color: 'black' }}
                type={showConfirmPassword ? 'text' : 'password'}
                {...register("confirmpwd", {
                  validate: validatePassword,
                })}
                placeholder="Confirm password"
              />
              {errors.confirmpwd && (
                <p style={{ color: 'red', fontSize: '10px', marginTop: "-25px" }}>
                  {errors.confirmpwd.message}
                </p>
              )}
              <span
                onClick={togglePasswordVisibility1}
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '10px',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  border: "none"
                }}
              >
                {showConfirmPassword ? <FaEyeSlash style={{ paddingBottom: "4px", fontSize: "18px" }} /> : <FaEye style={{ paddingBottom: "4px", fontSize: "18px" }} />}
              </span>
            </div>
            {errors.email?.type === "required" && "Email is required"}
            <div>
              <input type="submit" className="btn" value={"Sign Up"}  />
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
            <div className="policy">
              By continuing, you agree to Burly Nutrition's{" "}
              <Link to="/terms"><b style={{ color: "grey" }}>Terms & Conditions </b></Link>
              and
              <Link to="/privacy"><b style={{ color: "grey" }}> Privacy Policy </b></Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }} className="new-customer">
              <span style={{ marginLeft: '0px', fontSize: "14.5px" }}>Already registered?</span>
              <Link to="/login">
                <p style={{ marginLeft: '6px', cursor: 'pointer', fontWeight: "bold", fontSize: "14.5px" }}>Login to existing account</p>
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
