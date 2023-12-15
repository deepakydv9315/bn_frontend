import React from "react";
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

export default function Form() {
  const { isAuthenticated } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const signupRes = await dispatch(createUser(data));
    console.log("signup Response : ", signupRes);
    if (signupRes.payload.success) {
      toast.success("🦄 Registration successful!", { position: "top-right" });
      dispatch(clearError());
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      toast.error("Email is already registered!", { position: "top-right" });
    }
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
              style={{ backgroundColor: "transparent" }}
              type="text"
              {...register("email", { required: true })}
              placeholder="email"
            />
            <input
              style={{ backgroundColor: "transparent" }}
              type="text"
              {...register("username")}
              placeholder="username"
            />
            <input
              style={{ backgroundColor: "transparent" }}
              type="password"
              {...register("password")}
              placeholder="password"
            />
            <input
              style={{ backgroundColor: "transparent" }}
              type="password"
              {...register("confirmpwd")}
              placeholder="confirm password"
            />
            {errors.email?.type === "required" && "Email is required"}
            <div>
              <input type="submit" className="btn" value={"Sign Up"} />
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
