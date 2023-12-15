import React from 'react';
import "./Refund.scss";

const RefundPolicy = () => {
    return (
        <div className="refund-policy contain contain-bg">
            <h1 className='title1'>Return & Refund Policy</h1>
            <h4 className='title1'><span>Return Policy</span></h4>
            <p className='sec-para'>
                Our teams work hard to deliver you a product of elevated design and quality in a timely manner.
                However, in case you receive a product from us that is damaged or defective, or if the product
                delivered is different from what you had ordered, you may request a return.
                For all returns, the product must be unused, unwashed and in sellable condition.
                It must be in its original packaging with all its original tags and labels intact.
                All returns must be made within 7 days(If you have unboxing video) of the product’s actual date of delivery.
                If a product return is requested, the returns will be picked within 4-7 working days.
                In case of returns, the refunds will be credited to your account within 10-14 working days.
                Discounted products can not be returned.
                Note: ELINI does not provide exchange of products.
                If a customer wants to exchange, they must return the product and then place a new order.
            </p>
            <br></br>
            <h4 className='title1'><span>Refund Policy</span></h4>
            <p className='sec-para'>
                Refund will be initiated only if the product is no more in stock with us or the product
                has manufacturing defect which will be checked by ELINI quality team.
                The refund process will initiate within 2 working days of receiving the request at our Head Office
                (KH. No - 76 Min, Bijwasan Road, Village Kapashera, Near The Muse Sarovar Portico, New Delhi - 110037)
                & as soon as refund approval from quality team is received.
                Refunds will be credited back to customer account,
                within 10-14 days of initiation of refund which is dependent on the mode of payment.
            </p>
        </div>
    );
};

export default RefundPolicy;
