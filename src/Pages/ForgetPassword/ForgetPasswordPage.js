import React, { useState, useEffect } from "react";
import "./ForgetPasswordPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../Redux/slices/user";
import { useNavigate } from "react-router-dom";

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { error, message, success } = useSelector((state) => state.user);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    // Add logic to send email with OTP

    const forgetRes = await dispatch(forgotPassword({ email }));
    console.log("Forget Response >>> ", forgetRes);
    if (forgetRes.payload.success) {
      setShowAlert(true);
      navigate("/");
    }

    // setIsEmailSent(true);
  };

  return (
    <div className="forget-password-page contain contain-bg">
      <h2 className="sec-head sec-head-ul">Forgot Password</h2>

      <form onSubmit={handleEmailSubmit}>
        <label htmlFor="email">Enter your registered email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      {showAlert && (
        <div className="alert">
          Password Reset Link has sent to your Email :)
        </div>
      )}
    </div>
  );
};

export default ForgetPasswordPage;
