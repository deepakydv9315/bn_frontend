import React from 'react';

import './Ship.scss';

const Ship = () => {
    return (
        <>
            <section className="contain checkout-wrapper">
                <div className="ship-address">
                    <h5 className='ship-tittle'>Ship to</h5>
                    <form className="ship-form">
                        <div className="input-group">
                            <div className="input-label">Full Name*</div>
                            <input type="text" required />
                        </div>
                        <div className="input-group">
                            <div className="input-label">Phone Number*</div>
                            <input type="text" required />
                        </div>
                        <div className="input-group">
                            <div className="input-label">Email*</div>
                            <input type="text" required />
                        </div>
                        <div className="input-group">
                            <div className="input-label">Street Address*</div>
                            <input type="text" required />
                        </div>
                        <div className="input-group ig">
                            <div className="ig-1">
                                <div className="input-label">Postal Code*</div>
                                <input type="text" required />
                            </div>
                            <div className="ig-1">
                                <div className="input-label">Town/City*</div>
                                <input type="text" required />
                            </div>
                        </div>
                        <div className="input-group checkbox">
                            <input type='checkbox' />
                            <div>Save my Address</div>
                        </div>
                        <div className='ship-btn'>Place Order</div>
                    </form>
                </div>
                <div className='ship-detail'>
                    <div className='ship-orders'>
                        Your Order
                    </div>
                    <div className='ship-bill'>
                        Your Billing
                    </div>
                </div>
            </section>
        </>
    );
};

export default Ship;
