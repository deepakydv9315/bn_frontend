import React from 'react';
import './Terms.scss';
// import terms from "../../Assets/Images/terms.png";

const Privacy = () => {
  return (
    <div className="terms-condition-page contain-bg contain">
      <h1 className="title1">Terms and Condition</h1>
      {/* <img src={terms} alt="Privacy Policy" className="terms-condition-image" /> */}
      <br></br>
      <div className="terms-condition-content">
        <p>We are honored that you have chosen Burly Nutrition as your trusted supplier of gym protein products.
          These terms and conditions serve as the foundation of our agreement, outlining the rights and responsibilities
          that pertain to your engagement with us as you purchase and utilize our products.<br></br>
          When placing an order, we kindly request that you provide accurate and complete information,
          including your contact details and shipping address. It is important to note that we retain the discretion to cancel or decline any order as necessary.
          Our product prices are transparently presented on our website, and payment is expected at the time of order placement.
          We accommodate various payment methods, and your payment information is securely processed by reputable payment service providers.
          <br></br>
          Efficient order processing and timely delivery are our objectives. Nevertheless, please be aware that delivery times may vary,
          and you will be apprised of any shipping fees and estimated delivery times during the ordering process.
          Specifics concerning returns and refunds are detailed in our dedicated "Return and Refund Policy," which you implicitly accept when making a purchase from us.
          We place significant importance on safeguarding your privacy. To fully comprehend our data collection, usage,
          and protection practices, we encourage you to review our "Privacy Policy." Your use of our services signifies your consent to these privacy policies.
          All content on our website, including text, images, and logos, is safeguarded by intellectual property laws.
          Unauthorized use, reproduction, or distribution of our content is strictly prohibited without our explicit permission.

        </p>
        <br></br>
        <p> We hold a strong belief that all customers should engage respectfully and within the bounds of the law.
          It is imperative to understand that any abusive or inappropriate behavior may lead to restricted access to our services.
          While we are dedicated to delivering high-quality gym protein products, it is important to acknowledge that specific results or
          outcomes from their usage cannot be guaranteed. Our liability is restricted in accordance with applicable law. We strongly recommend consulting with a healthcare professional before commencing any dietary regimen.
          Our right to update and amend these terms and conditions ensures alignment with changes in our business practices or legal requirements.
          Any modifications will be promptly communicated on our website.
          <br></br>
          If you have questions or concerns regarding these terms and conditions, we welcome you to reach out to us at [Customer Support Email].
          Your interaction with our website and your procurement of our products signifies your implicit acknowledgment and acceptance of these
          terms and conditions. We genuinely appreciate the trust you have placed in [Your Company Name] and eagerly anticipate fulfilling your gym protein needs.
          <br></br>
          Please remember that these terms and conditions are subject to change, and we recommend periodic review to stay informed about any updates or modifications.</p>
      </div>
    </div>
  );
};

export default Privacy;
