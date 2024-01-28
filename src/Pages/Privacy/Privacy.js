import React from 'react';
import './Privacy.scss';
// import policy from "../../Assets/Images/policy.png";

const Privacy = () => {
  return (
    <div className="privacy-policy-page contain-bg bn-sec">
      <h1 className="title1">Privacy Policy</h1>
      <br></br>
      <div className="privacy-policy-content">
        <p>At Burly Nutrition, we are dedicated to safeguarding your privacy and ensuring the security of your personal information.
          This privacy policy outlines how we collect, utilize, and protect your data. By using our website and services, you consent to the practices detailed in this policy.
          <br />
          We collect personal information, such as your name, email address, phone number, and shipping address when you place an order,
          create an account, or get in touch with us. Payment information, like credit card details, is collected to process your transactions securely,
          but it is not stored on our servers. Communication records, including emails, customer support inquiries, and feedback, are gathered to assist
          and address your needs. Additionally, we gather data about your visits to our website, such as your IP address, browser type, device information,
          and pages visited, to enhance our website's functionality and user experience. Your personal information is used for order fulfillment, customer
          support, and to provide you with shipping updates. We also utilize your contact information to respond to inquiries and resolve issues.
          With your consent, we may send promotional offers, updates, and newsletters to your email address, allowing you to opt out at any time.
          We analyze website usage data to improve our website's functionality, user experience, and content.
          <br />
          Rest assured that we do not sell, trade, or rent your personal information to third parties.
          We may share your data with trusted service providers, such as payment processors and shipping partners, to fulfill orders and provide necessary
          services. These third parties are obligated to protect your information and use it solely for the services we require.
        </p>
        <br />
        <p>We employ cookies and similar technologies to enhance your browsing experience and collect information about website usage,
          with the ability for you to manage cookie preferences in your browser settings. We take data security seriously,
          implementing industry-standard measures to protect your data from unauthorized access, disclosure, alteration, and destruction.

          <br />
          You have the right to access, correct, or delete your personal information, and if you wish to exercise these rights, please contact us at <i style={{ fontWeight: "900" }}>support@burlynutrition.com</i>.
          This privacy policy may be updated to reflect changes in our practices or legal requirements, with any modifications posted on our website.
          <br />
          <br></br>
          For any questions or concerns regarding this privacy policy, please reach out to us at <i style={{ fontWeight: "900" }}>support@burlynutrition.com</i>.
          <br></br>
          <br></br>
          By using our website and services, you acknowledge and consent to the terms outlined in this privacy policy.</p>
      </div>
    </div>
  );
};

export default Privacy;
