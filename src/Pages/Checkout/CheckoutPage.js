import React, { useState } from 'react';
import ProductList from './ProductList';
import ShippingAddress from './ShippingAddress';
import PaymentInformation from './PaymentInformation';
import OrderSummary from './OrderSummary';
import './CheckoutPage.scss';

const CheckoutPage = () => {
  const [activeComponent, setActiveComponent] = useState('productList');
  const [tabCompletion, setTabCompletion] = useState({
    productList: false,
    shippingAddress: false,
    paymentInformation: false,
    orderSummary: false,
  });

  const handleTabCompleted = (tab) => {
    setTabCompletion((prevCompletion) => ({
      ...prevCompletion,
      [tab]: true,
    }));
  };

  return (
    <main className="checkout-page bn-sec contain-bg ">
      <div className="checkout-navigation">
        <button
          onClick={() => {
            setActiveComponent('productList');
            handleTabCompleted('productList');
          }}
          className={`navigation-button ${
            activeComponent === 'productList' ? 'active' : tabCompletion.productList ? 'completed' : ''
          }`}
        >
          Product List
        </button>
        <button
          onClick={() => {
            setActiveComponent('shippingAddress');
            handleTabCompleted('shippingAddress');
          }}
          className={`navigation-button ${
            activeComponent === 'shippingAddress'
              ? 'active'
              : tabCompletion.shippingAddress
              ? 'completed'
              : ''
          }`}
        >
          Shipping Address
        </button>
        <button
          onClick={() => {
            setActiveComponent('paymentInformation');
            handleTabCompleted('paymentInformation');
          }}
          className={`navigation-button ${
            activeComponent === 'paymentInformation'
              ? 'active'
              : tabCompletion.paymentInformation
              ? 'completed'
              : ''
          }`}
        >
          Payment Information
        </button>
        <button
          onClick={() => {
            setActiveComponent('orderSummary');
            handleTabCompleted('orderSummary');
          }}
          className={`navigation-button ${
            activeComponent === 'orderSummary' ? 'active' : tabCompletion.orderSummary ? 'completed' : ''
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
