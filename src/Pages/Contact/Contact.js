import React from 'react';
import './Contact.scss';

const ContactUsPage = () => {
  return (
    <div>
      <h1 className='contacthead'>Contact <span>Us</span></h1>
      <div className="contact-us-page">
        <div className="left-section">
          <div className="contact-form">
            <div className='getin'>Get in touch</div>
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
          <div className='supp'>Support</div>
          <div className="contact-info">
            <div className='info'>Phone - <span>8882 200 500</span></div><br/>
            <div className='info'>Email - <span>support@burlynutrition.com</span></div><br/>
            <div className='info'>Address - <span>Plot no. 23, Pocket C, Sector 27C, Faridabad, Haryana 121003</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
