import React from 'react';
import './Contact.scss';

const ContactUsPage = () => {
  return (
    <div className='contain'>
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
            <div className='info'>Phone - <br></br>+91 95403 78443</div><br/>
            <div className='info'>Email - <br></br>burlynutrition@gmail.com</div><br/>
            <div className='info'>Address - <br></br>Plot No.119,120 qutub vihar Ph-1, Dwarka sec-19, Delhi-110071</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
