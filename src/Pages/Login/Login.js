import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import bgImg from "../../Assets/Images/product.png";
import { set, useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInrUser, clearError } from "../../Redux/slices/user";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginGoogleUser } from "../../Redux/slices/user";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginForm() {
  const { isAuthenticated, error } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (data) => {
    const loginRes = await dispatch(getLoggedInrUser(data));

    if (loginRes.payload.success) {
      toast.success("Logged In Successfully", { position: "top-right" });
      dispatch(clearError());
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      toast.error("Incorrect Username or Password", { position: "top-right" });
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="si">
      <div className="register">
        <div className="col-1">
          <div className="close-icon" onClick={() => navigate("/")}>
            <FaTimes />
          </div>
          <h2>Log In</h2>
          <span>Log in to your account</span>
          <br></br>
          <br></br>
          <button
            className="signup-with-mail-btn"
            onClick={() => dispatch(loginGoogleUser())}
          >
            <BsGoogle className="mailicon" />
            {"\u00a0\u00a0\u00a0"}Log In with Google
          </button>

          <div className="or-line">or</div>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(handleLogin)}
          >
            <input
              style={{
                backgroundColor: "transparent",
                color: "black",
                padding: "12px",
              }}
              type="text"
              {...register("email")}
              placeholder="E-Mail"
            />
            <div style={{ position: "relative" }} className="flex flex-col">
              <input
                className="pass"
                style={{ backgroundColor: "transparent", color: "black" }}
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Password"
              />
              <span
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                {showPassword ? (
                  <FaEyeSlash
                    style={{ paddingBottom: "4px", fontSize: "18px" }}
                  />
                ) : (
                  <FaEye style={{ paddingBottom: "4px", fontSize: "18px" }} />
                )}
              </span>
            </div>
            <div className="forgotten">
              <Link to="/forgot">
                <p>Forgot your password?</p>
              </Link>
            </div>

            <div>
              {/* <button className="btn" onClick={handleLogin}>
                Log In
              </button> */}
              <input type="submit" className="btn" value="Log In" />
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
              <Link to="/terms">
                <b style={{ color: "grey" }}>Terms & Conditions </b>
              </Link>
              and
              <Link to="/privacy">
                <b style={{ color: "grey" }}> Privacy Policy </b>
              </Link>
            </div>
            <div
              style={{ display: "flex", alignItems: "center" }}
              className="new-customer"
            >
              <span style={{ marginLeft: "45px" }}>New here?</span>
              <Link to="/signup">
                <p
                  style={{
                    marginLeft: "4px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Create new account
                </p>
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
