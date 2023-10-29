import React, { useState,useEffect} from 'react';
import './ForgetPasswordPage.scss';
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from '../../Redux/slices/user';

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  const { error, message, success } = useSelector(
    (state) => state.user
  );

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Add logic to send email with OTP

    dispatch(forgotPassword({ email }));

    // setIsEmailSent(true);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Add logic to verify OTP and reset password
    setShowAlert(true);
  };
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 2200);

      return () => {
        clearTimeout(timer);
      };
    }

  }, [showAlert]);

  return (
    <div className="forget-password-page contain contain-bg">
      <h2 className='sec-head sec-head-ul'>Forgot Password</h2>
      {isEmailSent ? (
        <form onSubmit={handleOtpSubmit} >
          <label htmlFor="otp">Enter OTP:</label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
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
      )}
      {showAlert && (
        <div className="alert">Password Reset Link has sent to your Email :)</div>
      )}
    </div>
  );
};

export default ForgetPasswordPage;
