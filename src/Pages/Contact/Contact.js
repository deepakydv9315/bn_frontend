import React from 'react';
import './Contact.scss';

const ContactUsPage = () => {
  return (
    <div>
      <h1 className='contacthead'>Contact <span>Us</span></h1>
      <div className="contact-us-page">
        <div className="left-section">
          <div className="contact-form">
            <h3 className='getin'>Get in touch</h3>
            <div className="form-field">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message:</label>
              <textarea id="message" placeholder="Write your message here"></textarea>
            </div>
            <button className="send-button">Send</button>
          </div>
        </div>
        <div className="right-section">
          <h3 className='supp'>Support</h3>
          <div className="contact-info">
            <div className='info'>Phone - <span>+91 95403 78443</span></div><br/>
            <div className='info'>Email - <span>burlynutrition@gmail.com</span></div><br/>
            <div className='info'>Address - <span>Plot No.119,120 qutub vihar Ph-1, Dwarka sec-19, Delhi-110071</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
