import React from 'react';
import "./Refund.scss";

const RefundPolicy = () => {
    return (
        <div className="refund-policy bn-sec contain-bg">
            <h1>Return & Refund Policy</h1>
            <p>
                <b>Return & Refund Policy </b>
                <p>
                    Our teams work hard to deliver you a product of elevated design and quality in a timely manner. However, sometimes the products may not be able to deliver in appropriate manner. Therefore, we will accept return requests in the following conditions –
                </p>
                <p>
                    1. The product is damaged <br></br>
                    2. The product is expired<br></br>
                    3. The product is different from what you ordered
                    <br></br><br></br>
                </p>
                <b>
                    Prerequisites for demanding a return –
                </b>
            </p>
            1.	Reason to return must be among the among mentioned reasons <br></br>
            2.	You must have an unboxing video of the delivery packet <br></br>
            3.	The product must be unused, unwashed and in sellable condition <br></br>
            4.	The product must be in its original packaging with all its original tags and labels intact <br></br>
            5.	The time of delivery must not be more than 72 hrs than the time of request for return <br></br> 
            <p className='sec-para'>
                <b>
                Procedure to return –
                </b> <br></br>
                1.	If you fulfil all the criteria’s mentioned above & your reason to return is among the listed reasons then you must drop a mail at burlynutrition@gmail.com along with your order Id, explanation of the issue, 2 pics of the product (1 front angle & 1 top angle) & the video of unboxing. <br></br>
                2.	After you have mailed, our team will take 72 hours to review the request. You will receive a mail in the next 24 hours informing about the approval or rejection of your request. <br></br>
                3.	If the request is approved then the product will be picked from your address within 3 working days. <br></br>
                4.	Then after the team has received the product & is satisfied with the condition then the amount that you have paid will be refunded to the source account within 10-14 working days.
            </p>
        </div>
    );
};

export default RefundPolicy;
