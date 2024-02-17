import React from "react";
import "../RefundReturnPolicy/Refund.scss";

const RefundPolicy = () => {
  return (
    <div className="refund-policy contain contain-bg">
      <h1 className="title1">Shipping Policy</h1>
      {/* <h4 className='title1'><span>Return Policy</span></h4> */}
      <p className="ship-para">
      At Burly Nutrition, we strive to provide reliable and efficient shipping services for our supplement products across India. Here's what you need to know about our shipping policy:
        <br></br>
        <b>1. Shipping Zones:</b><br></br>
        We currently deliver our products to addresses within India. Please ensure that your delivery address is within our serviceable areas.
        <br></br>
        <b>2.Shipping Fees:</b><br></br>
        Shipping fees may vary depending on your location and the size of your order. You can view the shipping charges during the checkout process before finalizing your purchase.
        <br></br>
        <b>3. Estimated Delivery Times:</b><br></br>
        For most locations, you can expect your order to be delivered within 3 business days from the date of order confirmation. Please note that delivery times may vary based on your location and any unforeseen circumstances.
        <br></br>
        <b>4. Tracking Your Order:</b><br></br>
        Once your order is shipped, you will receive a tracking number via email, allowing you to monitor the status and estimated delivery date of your package. If you have any further questions or need assistance with your order, please do not hesitate to contact our customer support team at support@burlynutrition.com.
      </p>
    </div>
  );
};

export default RefundPolicy;
