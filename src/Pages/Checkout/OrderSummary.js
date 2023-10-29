import React from 'react';
import './OrderSummary.scss';
import orderData from './orderData';

const OrderSummary = () => {
  const { items, subtotal, shipping, total } = orderData;

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <div className="order-items">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      </div>
      <div className="order-details">
        <div className="subtotal">
          <span>Subtotal:</span>
          <span>{subtotal}</span>
        </div>
        <div className="shipping">
          <span>Shipping:</span>
          <span>{shipping}</span>
        </div>
        <div className="total">
          <span>Total:</span>
          <span>{total}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
