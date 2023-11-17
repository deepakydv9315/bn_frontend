import React from 'react';
import "./Refund.scss";

const RefundPolicy = () => {
    return (
        <div className="refund-policy contain contain-bg">
            <h1 className='title1'>Return & Refund Policy</h1>
            <h4 className='title1'><span>Return Policy</span></h4>
            <p className='sec-para'>
                At Burly Nutrition, we strive to provide reliable and efficient shipping services for our gluten-free food products across India. Here's what you need to know about our shipping policy:
                <br></br>
                1. Shipping Zones:<br></br>
                We currently deliver our products to addresses within India. Please ensure that your delivery address is within our serviceable areas.
                <br></br>
                2. Shipping Fees:<br></br>
                Shipping fees may vary depending on your location and the size of your order. You can view the shipping charges during the checkout process before finalizing your purchase.
                <br></br>
                3. Estimated Delivery Times:<br></br>
                For most locations, you can expect your order to be delivered within 3 business days from the date of order confirmation.
                Please note that delivery times may vary based on your location and any unforeseen circumstances.
                <br></br>
                4. Tracking Your Order:<br></br>
                Once your order is shipped, you will receive a tracking number via email, allowing you to monitor the status and estimated delivery date of your package.
                If you have any further questions or need assistance with your order, please do not hesitate to contact our customer support team.

            </p>
        </div>
    );
};

export default RefundPolicy;
