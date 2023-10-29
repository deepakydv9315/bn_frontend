import React, { useState } from 'react';
import ProductList from './ProductList';
import ShippingAddress from './ShippingAddress';
import PaymentInformation from './PaymentInformation';
import OrderSummary from './OrderSummary';
import './CheckoutPage.scss';

const CheckoutPage = () => {
  const [activeComponent, setActiveComponent] = useState('productList');

  return (
    <main className="checkout-page contain contain-bg ">
      <div className="checkout-navigation">
        <button
          onClick={() => setActiveComponent('productList')}
          className={`navigation-button ${activeComponent === 'productList' ? 'active' : ''
            }`}
        >
          Product List
        </button>
        <button
          onClick={() => setActiveComponent('shippingAddress')}
          className={`navigation-button ${activeComponent === 'shippingAddress' ? 'active' : ''
            }`}
        >
          Shipping Address
        </button>
        <button
          onClick={() => setActiveComponent('paymentInformation')}
          className={`navigation-button ${activeComponent === 'paymentInformation' ? 'active' : ''
            }`}
        >
          Payment Information
        </button>
        <button
          onClick={() => setActiveComponent('orderSummary')}
          className={`navigation-button ${activeComponent === 'orderSummary' ? 'active' : ''
            }`}
        >
          Order Summary
        </button>
      </div>
      <div className="checkout-content">
        {activeComponent === 'productList' && <ProductList />}
        {activeComponent === 'shippingAddress' && <ShippingAddress />}
        {activeComponent === 'paymentInformation' && <PaymentInformation />}
        {activeComponent === 'orderSummary' && <OrderSummary />}
      </div>
    </main>
  );
};

export default CheckoutPage;
