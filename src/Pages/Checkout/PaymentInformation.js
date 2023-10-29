import React, { useState } from 'react';
import './PaymentInformation.scss';

const PaymentInformation = () => {
    const [formData, setFormData] = useState({
        paymentMethod: 'creditCard',
        cardNumber: '',
        cardHolder: '',
        expirationDate: '',
        cvv: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="payment-information">
            <h2>Payment Information</h2>
            <form>
                <div className="form-group">
                    <label>Payment Method</label>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="creditCard"
                                checked={formData.paymentMethod === 'creditCard'}
                                onChange={handleInputChange}
                            />
                            Credit Card
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="cashOnDelivery"
                                checked={formData.paymentMethod === 'cashOnDelivery'}
                                onChange={handleInputChange}
                            />
                            Cash on Delivery
                        </label>
                    </div>
                </div>
                {formData.paymentMethod === 'creditCard' && (
                    <>
                        <div className="form-group">
                            <label htmlFor="cardNumber">Card Number</label>
                            <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="cardNumber">Card Holder</label>
                            <input
                                type="text"
                                id="cardHolder"
                                name="cardHolder"
                                value={formData.cardHolder}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="cardNumber">Expiry Date</label>
                            <input
                                type="text"
                                id="expirationDate"
                                name="expirationDate"
                                value={formData.expirationDate}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="cardNumber">CVV</label>
                            <input 
                                type="password"
                                id="cvv"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleInputChange}
                            />
                        </div>
                    </>
                )}
                <div className="form-actions">
                    <button type="submit">Save Payment</button>
                </div>
            </form>
        </div>
    );
};

export default PaymentInformation;
