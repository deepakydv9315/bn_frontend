import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import './Contact.scss';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendMessage } from "../../Redux/slices/utilsSlice";

const ContactUsPage = () => {
  const handleContact = () => {
    toast.success("Message has sent successfully", { position: "top-right" });
  };
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handlSubmitForm = (e) => {
    e.preventDefault();
    dispatch(
      sendMessage({
        name,
        email,
        message,
      })
    );
  };

  return (
    <div className='contain'>
      <h1 className='contacthead'>Contact <span>Us</span></h1>
      <div className="contact-us-page">
        <div className="left-section" onSubmit={handlSubmitForm} >
          <div className="contact-form">
            <h3 className='getin'>Get in touch</h3>
            <div className="form-field">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message:</label>
              <textarea id="message" placeholder="Write your message here" onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <div onClick={handleContact} onSubmit={handlSubmitForm}>
              <button className="send-button">Send</button>
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
          </div>
        </div>
        <div className="right-section">
          <h3 className='supp'>Support</h3>
          <div className="contact-info">
            <div className='info'>Phone - <br></br>+91 95403 78443</div><br />
            <div className='info'>Email - <br></br>burlynutrition@gmail.com</div><br />
            <div className='info'>Address - <br></br>Plot No.119,120 qutub vihar Ph-1, Dwarka sec-19, Delhi-110071</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
