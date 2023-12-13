import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import bgImg from "../../Assets/Images/product.png";
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInrUser, clearError } from "../../Redux/slices/user";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginGoogleUser } from "../../Redux/slices/user";

export default function LoginForm() {
  const { isAuthenticated, error } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (data) => {
    if (error) {
      toast.error(error, { position: "top-right" });
    } else {
      dispatch(getLoggedInrUser(data));
      if (isAuthenticated) {
        toast.success("🎉 Login successful!", { position: "top-right" });
        navigate("/");
        dispatch(clearError());
      }
    }
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
            <input style={{ backgroundColor: "transparent" }} type="text" {...register("email")} placeholder="E-Mail" />
            <input
              style={{ backgroundColor: "transparent" }}
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
              By continuing, you agree to Burly Nutrition's{" "}
              <b>Terms & Conditions</b> and <b>Privacy Policy</b>.
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
